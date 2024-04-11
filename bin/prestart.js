#! /usr/bin/env node

const { existsSync, writeFileSync } = require("fs");
const { resolve } = require("path");

const envFileDevPath = resolve("env", "env.development.js");
const envFileProdPath = resolve("env", "env.production.js");

const code = `module.exports = {
  port: 3000,
  urlApi: "http://localhost:9898",
};`;

if (!existsSync(envFileDevPath) && !existsSync(envFileProdPath)) {
  writeFileSync(envFileDevPath, code);
  writeFileSync(envFileProdPath, code.replace("3000", "80"));
}
