const Models = require('../models/index');
const MusicService = require('./music_service')
const UserService = require('./user_service');
const AccessService = require('./access_service');

class Services {
    constructor() {
        this.models = new Models();
        this.userService = new UserService({
            user: this.models.userModel,
            access: this.models.accessModel,
        });
        this.accessService = new AccessService({
            access: this.models.accessModel,
        });
        this.musicService = new MusicService({
            music: this.models.musicModel
        })
    }
}


module.exports = Services;
