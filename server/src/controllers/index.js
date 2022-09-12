const UserController = require('./user_controller');
const AccessController = require('./access_contoller');
const MusicController = require('./music_controller');

class Controllers {
    constructor(services) {
        this.userController = new UserController({
            user: services.userService,
        });
        this.accessController = new AccessController({
            user: services.userService,
            access: services.accessService,
        });
        this.musicController = new MusicController({
            music: services.musicService,
        });
    }
}


module.exports = Controllers;
