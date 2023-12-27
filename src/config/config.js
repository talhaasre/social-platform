let config = {
  api_url: process.env.REACT_APP_API_URL,
  api_token: process.env.REACT_APP_API_TOKEN,
  jwt_auth_key: "jwt_secret_storage",
  jwt_voter_auth_key: "jwt_voter_storage",
  app_mode: process.env.REACT_APP_APP_MODE,
};

export default config;
