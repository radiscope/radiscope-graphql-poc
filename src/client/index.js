import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { browserHistory, Router } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Store from './redux/store/Store';
import routes from './routes';

class Client extends Component {
    state = {
        store: {}
    };

    static getMountPoint() {
        return document.getElementById("content");
    }

    componentDidMount() {
        injectTapEventPlugin();

        this.setState({
            store: Store.configureStore()
        });
    }

    render() {
        let { store } = this.state;

        return (
            <MuiThemeProvider muiTheme={lightBaseTheme}>
                <Provider store={store}>
                    <Router history={browserHistory} routes={routes}/>
                </Provider>
            </MuiThemeProvider>
        )
    }
}


ReactDOM.render(<Client/>, Client.getMountPoint());