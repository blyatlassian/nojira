# NoJira, No Bullshit, Just Problem Solving

## Development Environment

This project utilizes a monorepo structure with the following components:

- `appserver/`: NestJS backend application
- `webapp/`: React frontend application

You have the option to run the App Server and Web App either concurrently or independently, depending on your development needs.

## Quick Start

1. Clone the repository
2. Run the setup script from the root directory:

   ```sh
   ./setup
   ```

   This will:

   - Create necessary `.env` files
   - Prompt for GitHub OAuth credentials
   - Install dependencies for all packages

3. Start the development servers:
   ```sh
   yarn dev
   ```

## GitHub OAuth Setup

The application uses GitHub OAuth for authentication. Follow these steps to set up your credentials:

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click on "New OAuth App"
3. Fill in the application details:
   - **Application name**: NoJira (or your preferred name)
   - **Homepage URL**: `http://localhost:8081`
   - **Authorization callback URL**: `http://localhost:8081`
4. Click "Register application"
5. Copy the generated **Client ID**
6. Generate a new **Client Secret**
7. Keep these credentials handy for the setup script

## Running the Application

**To run both concurrently:**

From the root directory of the project, execute the following command:

```sh
yarn dev
```

This command will initiate both the application server and the web application in parallel, streamlining your development workflow.

Or run them separately:

```sh
# Backend (from appserver directory)
cd appserver && yarn dev

# Frontend (from webapp directory)
cd webapp && yarn dev
```

## Development DGraph Instance

```
https://green-feather-41451536.ap-south-1.aws.cloud.dgraph.io/graphql
```
