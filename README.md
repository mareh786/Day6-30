# Greet App 👋

A simple multi-page Node.js application built using Express and EJS that greets users based on their name input.

## 📸 Preview

- Page 1: User enters their name
- Page 2: The app greets with "Hi, Welcome [Mohammed Adil Rehan]!"

## 💻 Tech Stack

- Node.js
- Express
- EJS (Embedded JavaScript Templates)
- CSS (for basic styling)
- Jest + Supertest (for testing)
- GitHub Actions (CI pipeline)

## 🚀 Features

- Multi-page navigation using Express routes
- Form handling with POST requests
- Unit tests for GET and POST routes
- CI pipeline:
  - Installs dependencies
  - Runs tests
  - Spins up the app for 10 seconds to verify it's working

## 🧪 Run Locally

```bash
npm install
npm test      # Run tests
npm start     # Start the app at http://localhost:3000
📁 Project Structure
.
├── app.js
├── app.test.js
├── package.json
├── public
│   └── styles.css
└── views
    ├── greet.ejs
    └── index.ejs
🔄 CI/CD
A GitHub Actions workflow runs on every push:

Installs dependencies

Runs unit tests

Starts the app temporarily and hits an endpoint with curl

Feel free to fork, contribute, or give feedback!