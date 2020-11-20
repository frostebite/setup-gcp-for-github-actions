# Setup GCP for GitHub Actions

This repository makes it easy to give GCP access to GitHub Actions. 

Click the button below and you will be taken to Google Cloud Shell, from there you will be taken through several steps automatically to add GCP access to any GitHub repo you have access to.

[![Run on Google
Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run/?git_repo=https://github.com/frostebite/setup-gcp-for-github-actions.git)

## Steps

1) You will be taken to google cloud shell and asked to allow this script to run.
2) You will select an existing google cloud project or create a new one to be used by GitHub actions.
4) You will be asked to select a GitHub repository to add the credentials to.
5) The service account will be created and two secrets will be added to the GitHub repo to enable GCP access.
