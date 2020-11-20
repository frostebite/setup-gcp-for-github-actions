# Setup GCP for GitHub Actions

This repository makes it easy to give GCP access to GitHub Actions. 

Click the button below and you will be taken to Google Cloud Shell, from there you will be taken through several steps automatically to add GCP access to any GitHub repo you have access to.

[![Run on Google
Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run/)

## Steps

1) Click the Run on Google Cloud button and confirm you trust this script.
2) You must then provide a GitHub personal access token and a GitHub repo URL
3) A service account will be created on GCP and two secrets (google-service-account-email and google-service-account-token) will be added to the GitHub repo to enable GCP access.
