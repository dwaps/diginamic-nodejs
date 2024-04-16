// @ts-check

const resultJson = require("../utils/result.json");

const GAME_KEY = "score";

const options = new Map([
  ["rock", "PIERRE"],
  ["paper", "FEUILLE"],
  ["scissors", "CISEAUX"],
]);

module.exports.playGame = (req, res, next) => {
  const values = Array.from(options.values());

  req.gameOfUser = options.get(req.params.action);
  req.gameOfServer = values[Math.floor(Math.random() * values.length)];

  if (req.gameOfUser === req.gameOfServer) {
    req.resultOfGame = "le même jeu que le serveur...";
    resultJson.tie++;
  } else if (
    (req.gameOfUser === "PIERRE" && req.gameOfServer === "CISEAUX") ||
    (req.gameOfUser === "FEUILLE" && req.gameOfServer === "PIERRE") ||
    (req.gameOfUser === "CISEAUX" && req.gameOfServer === "FEUILLE")
  ) {
    req.resultOfGame = "GAGNE !!!";
    resultJson.lose = "server";
    resultJson.win = "user";
    resultJson.userScore++;
  } else {
    req.resultOfGame = "PERDU :(";
    resultJson.lose = "user";
    resultJson.win = "server";
    resultJson.serverScore++;
  }

  console.log(resultJson);

  next();
};

module.exports.scoreOfGame = (req, res, next) => {
  req.jsonGameDescription = resultJson;
  next();
};
