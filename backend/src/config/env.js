const requiredEnv = [
  "PORT",
  "MONGODB_URI",
  "GEMINI_API_KEY",
  "GEMINI_MODEL",
];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});