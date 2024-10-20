const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    location: { type: String, required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    score: { type: String },
});

module.exports = mongoose.model('Game', GameSchema);
