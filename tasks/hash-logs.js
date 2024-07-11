import { createHash } from 'crypto';

const logs = [
  { timestamp: "2024-07-11T08:30:00", message: "Application started" },
  { timestamp: "2024-07-11T08:31:00", message: "Error: Database connection failed" },
  { timestamp: "2024-07-11T08:32:00", message: "Info: User logged in" },
  { timestamp: "2024-07-11T08:33:00", message: "Error: File not found" }
];

function categorizeAndHashLogs(logs) {
  const categorizedLogs = {
    errorLogs: [],
    infoLogs: []
  };

  logs.forEach(log => {
    const hash = createHash('sha1').update(log.message).digest('hex');
    if (log.message.toLowerCase().includes('error')) {
      categorizedLogs.errorLogs.push({ message: log.message, hash });
    } else {
      categorizedLogs.infoLogs.push({ message: log.message, hash });
    }
  });
  return categorizedLogs;
}

const categorizedLogs = categorizeAndHashLogs(logs);
console.log(categorizedLogs);