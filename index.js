const { Octokit } = require("@octokit/rest");
const child_process = require('child_process');
const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
});



async function start() {
  const { data } = await octokit.request("/user");
  console.log(data);
  console.log("test");
  
  child_process.execSync("gcloud auth application-default login");
}
// create service account

// create token

// create github secrets


start();