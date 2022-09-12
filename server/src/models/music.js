const mongoose = require('mongoose');

class Music {
    constructor() {
        const MusicSchema = new mongoose.Schema({
            name: String,
            category: String,
            composer: String,
            description: String,
            price: Number,
            published: String,
            new_arrival: Boolean,
            music_image: String,
            music_clip: String
        }, { timestamps: true });

        this.model = mongoose.model('Music', MusicSchema);
    }

    getModel() {
        return this.model;
    }
}

module.exports = Music;
