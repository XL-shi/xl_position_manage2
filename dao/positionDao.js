const {Position} = require("./model");
const positionDao = {
    save(positioninfo){
        return new Position(positioninfo).save();
    },
    count(){
        return Position.find().count();
    },
    findByPage(page){
        const pageSize = 5;
        return Position.find().skip((page-1)*pageSize).limit(pageSize);
    },
    find(){

    },
    update(){

    },
    delete(){

    }
};
module.exports = positionDao;