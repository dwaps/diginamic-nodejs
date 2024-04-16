// @ts-check

const { getGameFromDB, updateGame } = require("../db/queries");
const Game = require("../db/models/game");

const options = new Map([
  ["rock", "PIERRE"],
  ["paper", "FEUILLE"],
  ["scissors", "CISEAUX"],
]);

module.exports.playGame = async (req, res, next) => {
  const values = Array.from(options.values());
  req.gameOfUser = options.get(req.params.action);
  req.gameOfServer = values[Math.floor(Math.random() * values.length)];

  const game = await getGameFromDB();

  if (game) {
    if (req.gameOfUser === req.gameOfServer) {
      req.resultOfGame = "le même jeu que le serveur...";
      game.tie++;
    } else if (
      (req.gameOfUser === "PIERRE" && req.gameOfServer === "CISEAUX") ||
      (req.gameOfUser === "FEUILLE" && req.gameOfServer === "PIERRE") ||
      (req.gameOfUser === "CISEAUX" && req.gameOfServer === "FEUILLE")
    ) {
      req.resultOfGame = "GAGNE !!!";
      game.lose = "server";
      game.win = "user";
      game.userScore++;
    } else {
      req.resultOfGame = "PERDU :(";
      game.lose = "user";
      game.win = "server";
      game.serverScore++;
    }
  }

  try {
    await updateGame(game);
  } catch (e) {
    return res.status(500).josn({ error: "game not updated" });
  }

  next();
};

module.exports.scoreOfGame = async (req, res, next) => {
  req.jsonGameDescription = await getGameFromDB();
  next();
};
