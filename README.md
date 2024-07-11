# Parking Lot Design

1. This project implements a parking lot using object-oriented principles in JavaScript. The parking lot supports different types of vehicles and provides various functionalities such as checking remaining spots, total spots, and the status of specific types of spots.

## Features

- **Tell us how many spots are remaining**
- **Tell us how many total spots are in the parking lot**
- **Tell us when the parking lot is full**
- **Tell us when the parking lot is empty**
- **Tell us when certain spots are full (e.g., when all motorcycle spots are taken)**
- **Tell us how many spots vans are taking up**

## Assumptions

a. The parking lot can hold motorcycles, cars, and vans.
b. The parking lot has motorcycle spots, car spots, and large spots.
c. A motorcycle can park in any spot.
d. A car can park in a single compact spot or a regular spot.
e. A van can park, but it will take up 3 regular spots.

# Identify Users with Specific Action Sequence

2. Write a function findErrorUser that takes the log data and a specific input string (e.g., “ABC”) as parameters. The function should return an array of user IDs whose concatenated actions contain the specified input string.

# Categorize and Hash Logs

3. Write a function categorizeAndHashLogs that takes the log data as a parameter. The function should categorize the logs into error logs and informational logs based on the presence of the word “error” in the message. For each log entry, compute a SHA-1 hash of the message and include this hash in the categorized logs. The function should return an object containing two arrays: errorLogs and infoLogs.

# Compare 2 strings

4. Find if the two words are are different.

# Correct parenthesses

5. Find if parenthesses order is correct.