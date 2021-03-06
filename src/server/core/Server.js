import Express from 'express';
import React from 'react';
import path from 'path';
import ReactDOM from 'react-dom/server';
import Html from '../../shared/Html';
import Logger from '../util/Logger';
import Config from '../../../config/Config';

class Server {
    static init() {
        const app = new Express();

        app.use(Express.static(path.join(__dirname, 'dist')));

        app.use((request, response) => {
            response.status(200);
            response.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(<Html/>)}`);
            response.end();
        });

        app.listen(Config.PORT, () => {
            Logger.i(`App Server is up and running on http://localhost:${Config.PORT}`);
        });
    }
}

export default Server;