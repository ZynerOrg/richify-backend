import express from "express";

// Controllers

import userController from "./controllers/user";

//
const main = async () => {
  const app = express();
  const port = 3000;

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

  app.use("/api/v1/cron/", () => {
    console.log("Cron");
  });

  app.use("/api/v1/configuration/", () => {
    console.log("Configuration");
  });
  app.use("/api/v1/users", userController);
  app.use("/api/v1/autocomplete/", () => {
    console.log("Autocomplete");
  });
  app.use("/api/v1/charts/", () => {
    console.log("Charts");
  });
  app.use("/api/v1/data/", () => {
    console.log("Data");
  });
  app.use("/api/v1/insight/", () => {
    console.log("Insight");
  });
  app.use("/api/v1/summary/", () => {
    console.log("Summary");
  });
  app.use("/api/v1/search/", () => {
    console.log("Search");
  });
  app.use("/api/v1/preferences/", () => {
    console.log("Preferences");
  });
  app.use("/api/v1/webooks/", () => {
    console.log("Webhooks");
  });
  app.use("/api/v1/accounts/", () => {
    console.log("Accounts");
  });
  app.use("/api/v1/attachments/", () => {
    console.log("Attachments");
  });
  app.use("/api/v1/available_budgets/", () => {
    console.log("Available Budgets");
  });
  app.use("/api/v1/bills/", () => {
    console.log("Bills");
  });
  app.use("/api/v1/budgets/", () => {
    console.log("Budgets");
  });
  app.use("/api/v1/categories/", () => {
    console.log("Categories");
  });
  app.use("/api/v1/object_groups/", () => {
    console.log("Object Groups");
  });
  app.use("/api/v1/piggy_banks/", () => {
    console.log("Piggy Banks");
  });
  app.use("/api/v1/recurrences/", () => {
    console.log("Recurrences");
  });
  app.use("/api/v1/rules/", () => {
    console.log("Rules");
  });
  app.use("/api/v1/rule_groups/", () => {
    console.log("Rule Groups");
  });
  app.use("/api/v1/tags/", () => {
    console.log("Tags");
  });
  app.use("/api/v1/transactions/", () => {
    console.log("Transactions");
  });
  app.use("/api/v1/currencies/", () => {
    console.log("Currencies");
  });
  app.use("/api/v1/links/", () => {
    console.log("Links");
  });
};

main();
