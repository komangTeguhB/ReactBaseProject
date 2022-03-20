const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || "development",
  api_server: process.env.REACT_APP_API_ENDPOINT,
};

export { config };
