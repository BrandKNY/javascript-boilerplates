import React, { Component, PropTypes } from 'react';

export default class App extends Component {

  render() {
    const theme = getMuiTheme(null, {userAgent: this.props.userAgent});
    return (
      <IntlProvider locale={this.props.locale}>
        <MuiThemeProvider muiTheme={theme}>
          <p>Hello World!</p>
        </MuiThemeProvider>
      </IntlProvider>
    );
  }
}
