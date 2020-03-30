import React, { Component } from "react";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "135265810720-9s6fdpggsuuu5trvqf31ql2mvio1n06o.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
