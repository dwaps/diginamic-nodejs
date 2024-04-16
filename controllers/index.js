// @ts-check

module.exports.getScoreCtrl = (req, res) => {
  if (req.method.toLowerCase() === "get") {
    res.status(200).json(req.jsonGameDescription);
  } else {
    res.end("get score en POST");
  }
};

module.exports.playCtrl = (req, res) => {
  res.send(
    `Vous avez joué ${req.gameOfUser}, le serveur a joué ${req.gameOfServer}. Vous avez ${req.resultOfGame}.`
  );
};

module.exports.restartCtrl = (req, res) => {
  res.status(200).json({
    win: 100,
    lose: 5,
    tie: 0,
  });
};
