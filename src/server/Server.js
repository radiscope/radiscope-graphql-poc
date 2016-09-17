import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from '../client/components/Html';
import path from 'path';

const app = new Express();

app.use(Express.static(path.join(process.cwd(), 'static')));

app.use((request, response) => {
    response.status(200);

    const html = <Html cssPath="" jsPath=""/>;
    response.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`);
    response.end();
});

app.listen(8080, () => {
    console.info(`App Server is up and running on http://localhost:${8080}`);
});