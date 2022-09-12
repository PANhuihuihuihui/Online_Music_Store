const express = require('express');

const router = express.Router();

module.exports = (hikeController, auth) => {

    router.post('/', hikeController.createOne.bind(hikeController));

    // router.get('/me', auth, userController.constructor.getProfile.bind(userController));s
    return router;
};
