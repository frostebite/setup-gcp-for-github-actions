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

app.get('/', (req, res) => {
  console.log('Hello world received a request.');
  start();

  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});