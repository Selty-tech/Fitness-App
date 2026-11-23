# Fitness App

Fitness App uses React and Axios with an Express API, SQLite for account storage, and bcrypt for password hashing. The signed-in profile displays BMI, basal metabolic rate (BMR), and estimated daily calories (TDEE).

## Using the app

- Select **Create an account** to open the registration form. Submitting the form creates your account and signs you in.
- Select **Back to Login** from the registration form to sign in with an existing account.
- Select **Logout** to leave your profile.

## Run locally

Start the API from the repository root in one terminal:

```sh
cd fitness-api
npm install
node server.js
```

The API listens on port 3000 and uses `fitness.db` in its working directory. Keep database files and backups local.

Start Vite from the repository root in another terminal:

```sh
cd fitness-app
npm install
npm run dev
```

Vite prints the local URL. To create and preview a production build:

```sh
npm run build
npm run preview
```

`npm run lint` runs ESLint.

## Responsive layout

The centered page uses a fluid maximum width and wraps profile text on small screens. Login and registration fields stack vertically, size to the available width, and provide controls at least 48px tall with visible keyboard focus.
