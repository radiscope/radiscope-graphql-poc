import React, { Component, PropTypes } from 'react';

class Html extends Component {
    render() {
        const { cssPath, jsPath } = this.props;

        return (
            <html>
                <head>
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>

                    <title>Radiscope GraphQL</title>

                    <link href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700&subset=latin,latin-ext" rel="stylesheet" type="text/css"/>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css"/>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
                    <link rel="stylesheet" href={cssPath}/>
                </head>
                <body>
                    <div id="content"/>
                    <script src={jsPath} type="text/javascript" rel="script" charSet="UTF-8"/>
                </body>
            </html>
        );
    }
}

Html.propTypes = {
    cssPath: PropTypes.string,
    jsPath: PropTypes.string
};

export default Html;