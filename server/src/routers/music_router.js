const express = require('express');

const router = express.Router();

module.exports = (musicController, auth) => {

    router.get('/', musicController.findAll.bind(musicController))
    router.get('/:id', musicController.findOne.bind(musicController));

    router.post('/', musicController.createOne.bind(musicController));

    // router.get('/me', auth, userController.constructor.getProfile.bind(userController));s
    return router;
};
