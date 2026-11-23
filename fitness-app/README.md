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
npm ci
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

```powershell
$env:VITE_API_BASE_URL = 'http://localhost:3000'
npm run build
npm run preview
```

`npm run lint` runs ESLint.

## Responsive layout

The centered page uses a fluid maximum width and wraps profile text on small screens. Login and registration fields stack vertically, size to the available width, and provide controls at least 48px tall with visible keyboard focus.

## Portfolio demo deployment

The existing Vercel project builds the frontend from `fitness-app`. Host `fitness-api` separately as a single Node.js process with an HTTPS endpoint and a writable persistent directory. Use Node.js 24, install dependencies with `npm ci --omit=dev` in `fitness-api`, and start it with `node server.js`. Install dependencies on the host and deploy only the API source and package manifests.

| Setting | Where | Value |
| --- | --- | --- |
| `HOST` or `IP` | API host | Host-provided bind address. Defaults to `0.0.0.0`. |
| `PORT` | API host | Host-provided port. Defaults to `3000`. |
| `FITNESS_DB_PATH` | API host | Absolute path to a new `fitness-demo.db` in the writable persistent directory. |
| `FITNESS_WEB_ORIGINS` | API host | Comma-separated frontend origins, including `https://fitness-app-demo-selty2.vercel.app` and the exact Vercel preview origin during testing. |
| `VITE_API_BASE_URL` | Vercel Preview and Production | The public HTTPS origin of the API. Vite reads this during the build. |

Create the persistent directory before starting the API. SQLite creates the empty database and its original `users` table at startup. Keep the database outside the public document directory and Git checkout. Do not copy a local database or backup to the host. Use fictional profile values and a unique test password for portfolio demo accounts.

Configure the API URL in Vercel Preview and test registration, logout, login, BMI, BMR and daily calories through the browser. Confirm that the synthetic account still works after an API restart. Set the same API origin in Vercel Production after verification. Merge to `main` to trigger the existing Git deployment, then repeat the checks at the portfolio demo URL.
