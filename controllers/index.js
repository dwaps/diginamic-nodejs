// @ts-check

module.exports.getScoreCtrl = (req, res) => {
  // res.status(200).json({
  //   win: 100,
  //   lose: 5,
  //   tie: 0,
  // });
  res.send(
    `Vous avez joué ${req.params.action}.`
    // `Vous avez joué ${req.params.action}, le serveur a joué ${actionServer}. Vous avez ${result}.`
  );
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
