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

The [portfolio demo](https://fitness-app-demo-selty2.vercel.app/) uses the existing Vercel project `fitness-app-demo`, which builds the frontend from `fitness-app`. The [Express API](https://selty-fitness-api.alwaysdata.net/) runs as a single Node.js 24 process on the Alwaysdata Free plan.

| Setting | Where | Value |
| --- | --- | --- |
| `HOST` or `IP` | API host | Host-provided bind address. Defaults to `0.0.0.0`. |
| `PORT` | API host | Host-provided port. Defaults to `3000`. |
| `FITNESS_DB_PATH` | API host | `/home/selty-fitness-api/fitness-data/fitness-demo.db` |
| `FITNESS_WEB_ORIGINS` | API host | Comma-separated frontend origins, including `https://fitness-app-demo-selty2.vercel.app` and the exact Vercel preview origin during testing. |
| `VITE_API_BASE_URL` | Vercel Preview and Production | `https://selty-fitness-api.alwaysdata.net`. Vite reads this during the build. |

The Alwaysdata site command uses a pinned GitHub commit. On first start for that revision, it downloads `server.js`, `database.js`, `package.json`, and `package-lock.json` into a release directory under `~/fitness-api-releases`, runs `npm ci --omit=dev`, and starts `node server.js`. For API updates, change the pinned commit in **Web → Sites → Configuration** and check the process logs. The host supplies the bind address and port.

The site command creates `~/fitness-data` before the API starts. SQLite initializes an empty database with the original `users` table on first run. Later releases reuse that file from outside the release directory. Keep local databases and backups off the host. Use fictional profile values and a unique test password for portfolio demo accounts.

Configure the API URL in Vercel Preview and test registration, logout, login, BMI, BMR and daily calories through the browser. Confirm that the synthetic account still works after an API restart. Set the same API origin in Vercel Production after verification. Merge to `main` to trigger the existing Git deployment, then repeat the checks at the portfolio demo URL.
