const enableCors = (req, res, next) => {
  res.setHeaders("Access-Control-Allow-Origin", "*");
  res.setHeaders(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS",
  );
  res.setHeaders("Access-Control-Allow-Headers", "Content-Type");
  next();
};

module.exports = enableCors;
