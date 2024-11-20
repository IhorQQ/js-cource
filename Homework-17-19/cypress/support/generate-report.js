const { execSync } = require("child_process");

// Format the date as dd.mm.yyyy
const date = new Date();
const formattedDate = `${String(date.getDate()).padStart(2, "0")}.${String(
    date.getMonth() + 1
).padStart(2, "0")}.${date.getFullYear()}`;

// Get the environment variable or set to "default"
const env = process.env.ENV || "stableEnv";

// Build the report command
const command = `npx marge cypress/reports/*-mochawesome.json --reportDir cypress/reports --reportFilename HTMLReport-${env}-${formattedDate}`;

// Generate the report
console.log(`Generating report for ENV: ${env} on ${formattedDate}`);
execSync(command, { stdio: "inherit" });
