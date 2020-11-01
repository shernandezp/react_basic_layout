import React, { Component } from 'react' 
import Layout  from './layout/Layout' 
import Login  from './containers/Login' 
import decode from 'jwt-decode'
import { withLocalize } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";
import globalTranslations from "./translations/global.json";
 
function checkAuth() {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }

  try {
    let payload = decode(token);
    if (payload.exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.output = this.output.bind(this)
    this.state = { loggedin: false }

    const languages = [
      { name: "English", code: "en" },
      { name: "Spanish", code: "es" }
    ];
    const defaultLanguage = localStorage.getItem("languageCode") || languages[0].code;

    this.props.initialize({
      languages: languages,
      translation: globalTranslations,
      options: {
        renderToStaticMarkup,
        renderInnerHtml: true,
        defaultLanguage: defaultLanguage
      }
    });
  }
  componentDidUpdate(prevProps) {
    const prevLangCode =
      prevProps.activeLanguage && prevProps.activeLanguage.code;
    const curLangCode =
      this.props.activeLanguage && this.props.activeLanguage.code;

    const hasLanguageChanged = prevLangCode !== curLangCode;

    if (hasLanguageChanged) {
      localStorage.setItem("languageCode", curLangCode);
    }
  }
  output(evt) {
      this.setState({loggedin: evt})
  }
  Content({output, loggedin})
  {
    if (checkAuth())
      return(<Layout/>);
    if (!loggedin)
      return(<Login func={output}/>);
    else
      return(<Layout/>);
  }
  render() {
    return (
        <this.Content output={this.output} loggedin={this.state.loggedin}/>
     )
  };
}

export default withLocalize(Main);