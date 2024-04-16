// @ts-check

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
    `Vous avez joué ${req.gameOfUser}, le serveur a joué ${req.gameOfServer}. Vous avez ${req.resultOfGame}.`
  );
};

module.exports.restartCtrl = (req, res) => {
  const resultJson = require("../utils/result.json");
  Object.keys(resultJson).forEach((k) => (resultJson[k] = ""));
  res.status(200).json(resultJson);
};
