# Project Infrastructure with Terraform

This repository contains a simple React app and Terraform configuration to set up an AWS S3 bucket for deployment.

## Infrastructure Overview
- **Terraform** is used to create and manage AWS resources.
- **AWS S3** is used for hosting static files.

## Setup Instructions

### Prerequisites
1. Install **Terraform**: [Download Terraform](https://developer.hashicorp.com/terraform/downloads)
2. Configure AWS CLI with credentials:
   ```sh
   aws configure
   ```

### Deploying S3 Bucket with Terraform
1. Navigate to the Terraform directory:
   ```sh
   cd terraform
   ```
2. Initialize Terraform:
   ```sh
   terraform init
   ```
3. Apply the configuration to create the S3 bucket:
   ```sh
   terraform apply
   ```
   Type `yes` to confirm.

### Uploading React Build to S3
1. Build the React app:
   ```sh
   npm run build
   ```
2. Copy the build files to S3:
   ```sh
   aws s3 sync build/ s3://your-s3-bucket-name --delete
   ```

### Cleaning Up
To remove the infrastructure, run:
```sh
terraform destroy
```
Type `yes` to confirm.

