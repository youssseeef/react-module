import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { GlobalStyle } from './GlobalStyle';

function isLogged(cookies) {
  const expiresAt = cookies.get('expires_at');
  return new Date().getTime() < expiresAt;
}

export const AuthWrapper = (Unauthorized, Page) => (
  class extends Component {
    constructor(props) {
      super(props);
    }

    static async getInitialProps(ctx) {
      const cookies = new Cookies(ctx.req && ctx.req.headers.cookie);
      const isAuthenticated = isLogged(cookies);
      const pageProps = await Page.getInitialProps && Page.getInitialProps(ctx);
      return {
        isAuthenticated,
        ...(await pageProps)
      };
    }

    render() {
      return (
        <>
          {this.props.isAuthenticated
            ? <Page {...this.props} />
            : <Unauthorized />}
          <GlobalStyle />
        </>
      );
    }
  }
);