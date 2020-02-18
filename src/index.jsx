import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>
    );
};

render(App);

/*eslint-disable */
if(module.hot) {
    module.hot.accept('./components/App', () => {
        render(App);
    });
}

/*eslint-enable */