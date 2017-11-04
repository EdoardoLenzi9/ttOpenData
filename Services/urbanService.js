var repo = require('../Repositories/urbanRepository.js');

getRoutes = function (){ 
    return repo.getRoutes();
}

module.exports = {
    getRoutes
};