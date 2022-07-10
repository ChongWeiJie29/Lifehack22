const path = require('path');

module.exports = {
    webpack: {
        configure:{
            // See https://github.com/webpack/webpack/issues/6725
            module:{
                rules: [{
                    test: /\.wasm$/,
                    type: 'javascript/auto',
                }]
            },
            resolve: {
                alias:{
                    mydir: path.resolve( __dirname, 'path', 'to', 'mydir' )
                  },
                extensions: [ '', '.js' ],
                fallback: {
                    "fs": false,
                    "path": false,
                    "url": false
                }
            }
        }
    }
};