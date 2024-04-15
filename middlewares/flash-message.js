// @ts-check

module.exports.flashMessage = (req, res, next) => {
  /**
   *
   * @param {string} type error OU success
   * @param {string} mss Description
   */
  req.setFlashMessage = (type, mss) => {
    req.session.flashMessage = { type, mss };
  };

  req.getFlashMessage = () => {
    const fm = req.session.flashMessage;
    delete req.session.flashMessage;
    return fm;
  };

  next();
};
