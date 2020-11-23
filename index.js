const { Octokit } = require("@octokit/rest");
const child_process = require('child_process');

const express = require('express');
const app = express();

async function start() {
  const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  });
  const { data } = await octokit.request("/user");
  console.log(data);
  console.log("test");
  
  child_process.execSync("gcloud auth application-default login");
  // create service account
  
  // create token
  
  // create github secrets
}

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/', (req, res) => {
  start();

  res.send(`Done`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});