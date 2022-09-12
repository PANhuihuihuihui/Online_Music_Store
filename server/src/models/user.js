const mongoose = require('mongoose');

class User {
    constructor() {
        const UserSchema = new mongoose.Schema({
            
            email: {
                type: String,
                unique: true,
            },
            
            password: String,
            
        }, { timestamps: true });

        this.model = mongoose.model('Users', UserSchema);
    }

    getModel() {
        return this.model;
    }
}

module.exports = User;
