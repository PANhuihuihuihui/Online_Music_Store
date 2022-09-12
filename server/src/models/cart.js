const mongoose = require('mongoose');

class Cart {
    constructor() {
        const CartSchema = new mongoose.Schema({
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
            quantity: Number,
            music: { type: mongoose.Schema.Types.ObjectId, ref: 'Music' }
        }, { timestamps: true });

        this.model = mongoose.model('Carts', CartSchema);
    }

    getModel() {
        return this.model;
    }
}

module.exports = Cart;
