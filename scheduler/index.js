const schedule = require("node-schedule");

const { currencyFunctionUpdate } = require("./controls/currencyFunction");

// Create a scheduled job using node-schedule. This job runs for every hour.
const job = schedule.scheduleJob("0 * * * *", async function () {
  try {
    // Since it's an async function, it returns a promise, and await will pause until that promise settles.
    await currencyFunctionUpdate();
    // If the function resolves successfully, log that the scheduler is running.
    console.log("Scheduler running!");
  } catch (error) {
    // If the function throws an error, catch it and log it to the console.
    console.error("Scheduler error:", error);
  }
});

// Export the job so that it can be used in other parts of the application if necessary.
module.exports = job;
