# Next.js Starter with Authentication

A Next.js starter template with built-in authentication, including signup, login (with Google login), and email verification via Resend. The project follows a modular and framework-like structure for easy scalability.

## Features

- **User Authentication:** Signup, Login with email/password & Google login
- **Email Verification:** Verification emails with Resend API, including a resend feature
- **Structured Framework:** Modular code with predefined authentication pages
- **Environment Configurations:** `.env.example` provides necessary variables for configuration

## Authentication Routes

- **Login:** `/auth/login`
- **Signup:** `/auth/signup`
- **Email Verification:** `/auth/verify`

## Setup

### 1. Clone the Repository
```sh
git clone https://github.com/DivyanshuLohani/next-js-starter-with-authentication.git
cd next-js-starter-with-authentication
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables

Rename .env.example to .env.local and fill in the required fields, including API keys for Resend and Google authentication.

For Google Login, add the following URIs to your Google OAuth redirect settings:

- Production: https://{YOUR_DOMAIN}/api/auth/callback/google

- Development: http://localhost:3000/api/auth/callback/google

### 4. Run the Development Server

```bash
npm run dev
```

The project will be running at [localhost:3000](http://localhost:3000).

## Authentication Configuration

This project uses NextAuth.js for authentication.
Modify the configuration in:

```bash
src/lib/auth/authOptions.ts
```
to customize authentication behavior, providers, and callbacks.


Enjoy building with Next.js Starter with Authentication!