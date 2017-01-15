var path = require('path');

module.exports = {
    dest: path.join(__dirname, '../public'),
    options: {
        compiler: {
            compress: true
        }
    },
    preprocess: {
        path: function(pathname, req) {
            return pathname.replace('/css/', '/');
        }
    },
	force: true,
    debug: true
};
