const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
});



async function start() {
  const { data } = await octokit.request("/user");
  console.log(data);
  console.log("test");
}
// create service account

// create token

// create github secrets


start();