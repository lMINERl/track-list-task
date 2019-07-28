// enviroment variables for future deployment
const baseURL =
  process.env.REACT_APP_BASE_URL ||
  `https://api.myjson.com` ||
  `http://localhost:3000`;
  
export default baseURL;
