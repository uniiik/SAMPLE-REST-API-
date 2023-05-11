const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000; //this will our project on port provided by platform on which we are hosting our application or else will run on 3000
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});
