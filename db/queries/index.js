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

module.exports.createOrUpdateGame = async (game) => {
  let existed;
  try {
    existed = await this.getGameFromDB();
    if (!existed) {
      existed = await createGame();
    }
    this.findByIdAndUpdate(game);
  } catch (e) {
    console.error(e);
  }
};
