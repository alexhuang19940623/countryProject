# Project Deployment Guide

## Introduction

`CountryProject` is a full-stack application developed with a React front end and an Express.js backend. This guide provides a step-by-step process to deploy both front-end and back-end services on a server, with specific examples for AWS Lightsail. Ensure to have a registered AWS account and a GitHub account to follow through.

## Repository Structure

countryProject
├─ backend
│  ├─ .env
│  ├─ controllers
│  │  └─ country.js
│  ├─ ...
│  ├─ routes
│  │  └─ country.js
│  └─ server.js
└─ frontend
   ├─ build
   │  ├─ ...
   ├─ public
   │  ├─ ...
   │  ├─ index.html
   │
   └─ src
      ├─ App.js
      ├─ component
      │  ├─ Footer.js
      │  └─ Header.js
      ├─ ...
      ├─ page
      │  └─ Home.js
      ├─ ...
      
## Application Stack
**Frontend**: React.js
**Backend**: Node.js with Express.js
**HTTP Requests**: Using axios for API requests

### Access the Application: http://54.229.187.75:3000/

## Prerequisites

### Local Setup

1. **Frontend** is developed using React, executed locally on port `3000`.
2. **Backend** developed using Node.js with Express, running locally on port `8000`.

### Application Configuration

1. **Frontend**: Axios or similar is used to make HTTP requests to `http://127.0.0.1:8000/api/country`.
2. **Backend**: Utilizes CORS to handle requests from different origins.

## Local Development
### Frontend
1. **Install Dependencies**: 
   `cd frontend`
   `npm install`
2. **Start Application**:
   `npm start`
### Visit http://localhost:3000.

### Backend
1. **Install Dependencies**:
   `cd backend`
   `npm install`
2. **Start the Service**:
   `npm start`
### Validate at http://localhost:8000/api/country.

## AWS Deployment Steps

### Step 1: AWS Lightsail Setup

1. **Create Instance**: Setup a Lightsail instance on AWS, selecting the appropriate OS and plan.

2. **Configure Ports**:
   - Navigate to the Networking tab of the instance.
   - Under the Firewall section of the page, add two new application rules for `application` type.
   - Add custom application rule, Port `3000`.
   - Add custom application rule, Port `8000`.

### Step 2: SSH Key Configuration
1. **Generate SSH Key Pair**: `ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa_aws`

2. **Configure SSH Key Usage**: 

   Edit or create `~/.ssh/config` and add the following entries: 

   `Host` aws-lightsail
   `HostName` [Your_AWS_Instance_IP]
   `User` [Your_AWS_Instance_Username]
   `IdentityFile` ~/.ssh/id_rsa_aws

3. **Add SSH Key to AWS**: Add the public key (`id_rsa_aws.pub`) to your Lightsail instance's SSH Key Pairs through the AWS Management Console.

### Step 3: Code Transfer
1. **GitHub Repository**: Commit both the frontend and backend codebases to GitHub.

2. **Clone Repository on AWS**:
    SSH into your AWS Lightsail instance: `ssh [Your_AWS_Instance_Username]@aws-lightsail`

3. **Clone the repository**:
    git clone [Your_Repository_URL]

### Step 4: Backend Setup on AWS
1. **Navigate to Backend Directory**: `cd countryProject/backend`
2. **Install Dependencies**: `npm install`
3. **Environment Variables**: Ensure all environment variables present in the .env file are configured in your AWS instance.
4. **Start the Application**: `npm start`

### Step 5: Frontend Setup on AWS
1. **Navigate to Frontend Directory**: `cd countryProject/frontend`
2. **Install Dependencies**: `npm install`
3. **Build the Application**: `npm run build`

### Step 6: Accessing the Application
1. **The backend should be running on** `http://[Your_AWS_IP]:8000/`.
2. **The frontend should be accessible via** `http://[Your_AWS_IP]:3000/`.

## Troubleshooting

1. **Ensure that environment variables are set correctly.**
2. **Validate that the port configurations in your AWS instance and the application are consistent.**
3. **Check application logs for error details to debug effectively.**
## Maintenance & Further Steps**
1. **Implement CI/CD pipelines for automated deployments using GitHub Actions or AWS CodePipeline.**
2. **Configure domain names and SSL using AWS Route53 and AWS Certificate Manager for a professional web address and secure connection.**
3. **Optimize your application by leveraging caching, utilizing CDNs, and fine-tuning database queries.**
## Conclusion
**Follow through each step, adapting as necessary to accommodate any unique configurations or additional technologies utilized in your `CountryProject`. This guide lays a foundational procedure for deploying MERN stack applications to `AWS Lightsail`.
Ensure to test thoroughly, establish monitoring, and backup protocols for production-readiness, and explore further optimization and scaling strategies as user traffic grows.**

