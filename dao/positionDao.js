const {Position} = require("./model");
const positionDao = {
    save(positioninfo){
        return new Position(positioninfo).save();
    },
    find(){

    },
    update(){

    },
    delete(){

    }
};
module.exports = positionDao;