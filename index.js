const { Octokit } = require("@octokit/rest");
const child_process = require('child_process');
const exphbs  = require('express-handlebars');
const express = require('express');

const app = express();

app.use(express.urlencoded({
  extended: true
}));

var hbs = exphbs.create({ /* config */ });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


async function start() {
  const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  });
  const { data } = await octokit.request("/user");
  console.log(data);
  console.log("test");
  
  // create service account
  
  // create token
  
  // create github secrets
}

function run(cmd){
  return child_process.execSync(cmd).toString();
}


app.get('/', (req, res) => {
  res.render('home');
});

app.post('/', (req, res) => {
  run(req.body.input);
  res.render('home');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});