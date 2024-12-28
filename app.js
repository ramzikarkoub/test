const fs = require("fs");

// Create a write stream for logging
const logStream = fs.createWriteStream("./logs/output.log", { flags: "a" });

// Example log message
logStream.write(`Server started at ${new Date().toISOString()}\n`);

// Remember to close the stream on process exit
process.on("exit", () => {
  logStream.end();
});
//hihi
