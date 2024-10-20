const Game = require('../models/Game');

exports.createGame = async (req, res) => {
    const { date, location } = req.body;
    try {
        const newGame = new Game({ date, location, participants: [] });
        await newGame.save();
        res.status(201).json({ message: 'Game created successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getGames = async (req, res) => {
    try {
        const games = await Game.find().populate('participants');
        res.json(games);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
