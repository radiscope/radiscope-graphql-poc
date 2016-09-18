let Store = null;

if (process.env.NODE_ENV === 'production') {
    Store = require('./ProdStore').default;
} else {
    Store = require('./DevStore').default;
}

export default Store;

