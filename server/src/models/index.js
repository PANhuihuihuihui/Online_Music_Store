const UserModel = require('./user');
const AccessModel = require('./access');
const MusicModel = require('./music');
const CartModel = require('./cart');

class Models {
    constructor() {
        this.userModel = new UserModel().getModel();
        this.accessModel = new AccessModel().getModel();
        this.musicModel = new MusicModel().getModel();
        this.cartModel = new CartModel().getModel();
    }

}


module.exports = Models;