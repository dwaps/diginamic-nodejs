const Game = require("../models/game");

async function createGame() {
  try {
    return await new Game().save();
  } catch (e) {
    console.error(e);
  }
}

createGame();

module.exports.updateGame = async (game) => {
  try {
    return await Game.findByIdAndUpdate(game.id, game, { new: false });
  } catch (e) {
    console.error(e);
  }
};

module.exports.getGameFromDB = async () => {
  return await Game.findOne();
};

module.exports.resetGame = async () => {
  try {
    const game = await Game.findOne();
    return await Game.findByIdAndUpdate(
      game.id,
      {
        win: "",
        lose: "",
        userScore: 0,
        serverScore: 0,
        tie: 0,
      },
      { new: false }
    );
  } catch (e) {
    console.error(e);
  }
};
