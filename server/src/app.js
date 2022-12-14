const express = require('express');

// loaders
require('./loaders/mongoose');
const expressLoader = require('./loaders/express');

// controllers
const Services = require('./services/index');

// controllers
const Controllers = require('./controllers/index');

// middlewares
const userAuth = require('./middleware/auth');

// routes
const Routers = require('./routers/index');

module.exports = () => {
    const services = new Services();
    const controllers = new Controllers(services);
    const routers = new Routers(
        controllers,
        userAuth({
            accessService: services.accessService,
        })
    );

    const app = express();
    app.use('/static',express.static('./public'));
    expressLoader.pre({ app });

    // routers here
    
    app.use('/v1/user', routers.userRouter);
    app.use('/v1/access', routers.accessRouter);
    app.use('/v1/music', routers.musicRouter);

    expressLoader.post({ app });

    return {
        app,
    };
};
