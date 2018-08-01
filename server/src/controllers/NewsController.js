const News = require('../models/News')

module.exports = {
    create: (params, callback) => {
        News.create(params, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result);
        });
    },

    find: (params, callback) => {
        News.find(params,'_id title teaser', (err, results) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    },

    findById: (id, callback) => {
        News.findById(id, (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    },
}
