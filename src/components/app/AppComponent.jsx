import React, { Component, PropTypes } from 'react';

import { IntlProvider } from 'react-intl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

export default class AppComponent extends Component {

  render() {
    const theme = getMuiTheme(null, {userAgent: this.props.userAgent});
    return (
      <IntlProvider locale={this.props.locale}>
        <MuiThemeProvider muiTheme={theme}>
          {this.props.children}
        </MuiThemeProvider>
      </IntlProvider>
    );
  }
}