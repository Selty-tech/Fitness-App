# Fitness App

A small React demo that displays a sample fitness profile and calculates BMI, basal metabolic rate (BMR), and estimated daily calories.

## Demo behavior

- The page starts with a fictional sample profile.
- **Logout** opens the local demo login screen. The login button restores the sample profile; the fields are not checked against an account.
- Profile and health values are calculated in the browser. The app does not send data to an API or store a real account.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
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

The centered page now uses a fluid maximum width, balanced heading sizes, and wrapping content from 320px up to desktop widths. Login fields and buttons remain full-width within a readable maximum and have 48px minimum touch height. Focus indicators and the existing light/dark color treatment remain available on keyboard and touch devices.
