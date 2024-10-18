const notFoundRoute = (req, res, next) => {
  const url = req?.originalUrl;
  const error = new Error(`${url} is not found`);
  next(error);
};

module.exports = notFoundRoute;
