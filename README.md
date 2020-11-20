# init-gcp-project-for-github-actions

This repository makes it easy to give GCP access to GitHub Actions. 

By clicking the button below you will be taken to the Google Cloud Shell, from there you will be taken through several steps automatically to complete the process.

[![Run on Google
Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run/?git_repo=https://github.com/GoogleCloudPlatform/cloud-run-hello.git)

You will be taken through the following steps when you click the button below:

1) You will be taken to google cloud shell and asked to allow this script to run.
2) You will select an existing google cloud project or create a new one to be used by GitHub actions.
4) You will be asked to select a GitHub repository to add the credentials to.
5) The service account will be created and two secrets will be added to the GitHub repo to enable GCP access.
