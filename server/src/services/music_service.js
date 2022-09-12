const bcrypt = require('bcrypt');
const error = require('../util/error');
const Base = require('./base_service');

class MusicService extends Base {
    constructor({ music }) {
        super(music);
    }
}

module.exports = MusicService;
