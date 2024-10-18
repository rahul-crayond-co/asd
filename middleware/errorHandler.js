const errorHandler = (err, req, res, next) => {
  res.status(err?.status || 500).json({ msg: err?.message });
  next();
};

module.exports = errorHandler;
