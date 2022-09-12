const userRouter = require('./user_router');
const accessRouter = require('./access_router');
const musicRouter = require('./music_router');

class Routers {
    constructor(controllers, auth) {
        this.userRouter = userRouter(controllers.userController, auth);
        this.accessRouter = accessRouter(
            controllers.accessController,
            auth
        );
        this.musicRouter = musicRouter(
            controllers.musicController,
            auth
        );
    }
}

module.exports = Routers;
