# Setup GCP for GitHub Actions

This repository makes it easy to give GCP access to GitHub Actions. 

[![Run on Google
Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run/)

## Steps

1) Click the Run on Google Cloud button and confirm you trust this script.
2) When the shell finishes deploying the service a link will be posted to the running service (in green). Open this link.
3) Follow the onscreen instructions to setup the service.

A service account will be created on GCP and two secrets (google-service-account-email and google-service-account-token) will be added to the GitHub repo to enable GCP access.
