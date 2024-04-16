// @ts-check

const { resetGame } = require("../db/queries");

module.exports.getScoreCtrl = (req, res) => {
  if (req.method.toLowerCase() === "get") {
    res.status(200).json(req.jsonGameDescription);
  } else {
    const { win, lose, tie } = req.params;
    res.status(200).json({ win, lose, tie });
  }
};

module.exports.playCtrl = (req, res) => {
  res.send(
    `Vous avez joué ${req.gameOfUser ?? req.params.action}, le serveur a joué ${
      req.gameOfServer ?? "PIERRE"
    }. Vous avez ${req.resultOfGame ?? "🫢"}.`
  );
};

module.exports.restartCtrl = (req, res) => {
  try {
    resetGame();
    res.status(200).json({ message: "Le jeu a été remis à zéro" });
  } catch (e) {
    res.status(500).json({ error: "Le jeu n'a pas pu être remis à zéro" });
  }
};
