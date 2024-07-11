import readline from 'readline';

const map = new Map();

function manual(inputValue) {
    const mapManual = new Map();
    console.log(`Manual processing`);

    let data = Object.freeze({
        Tom: 'qwerty',
        Harry: 'qwe123rty',
        Larry: '123',
        John: 'ytrewq',
        Jack: '123qwerty',
        Veronica: 'qwer',
    });

    Object.entries(data).forEach(([key, value]) => {
        mapManual.set(key, value);
    });

    mapManual.forEach((value, key) => {
        if (value.includes(inputValue)) {
            console.log(key)
        }
    });
}

// manual(`qwerty`);

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// console.log('Enter text')

// rl.on('line', (input) => {
//     const firstInput = input.trim().toLowerCase();

//     if (firstInput === 'exit') {
//         rl.close();
//     } else if (firstInput === 'manual') {
//         manual('qwerty');
//         rl.close();
//     } else {
//         console.log(`Received: ${input}`);
//     }

//     if (map.has(input)) {
//         map.set(input, map.get(input) + 1);
//     } else {
//         map.set(input, 1)
//     }

// });

// rl.on('close', () => {
//     console.log('Goodbye!');
//     map.forEach((value) => {
//         if (value > 1) {
//             console.log(`${value} was repeated more than 1 time`)
//         }
//     });
//     console.log(map);
// });

const logs = [
    { action: 'A', userId: 1 },
    { action: 'A', userId: 1 },
    { action: 'A', userId: 2 },
    { action: 'A', userId: 3 },
    { action: 'A', userId: 1 },
    { action: 'B', userId: 1 },
    { action: 'B', userId: 1 },
    { action: 'B', userId: 2 },
    { action: 'B', userId: 3 },
    { action: 'A', userId: 3 },
    { action: 'C', userId: 3 },
    { action: 'C', userId: 2 },
    { action: 'C', userId: 1 },
    { action: 'B', userId: 1 },
    { action: 'C', userId: 1 },
    { action: 'A', userId: 6 },
    { action: 'B', userId: 4 },
    { action: 'B', userId: 4 },
    { action: 'B', userId: 6 },
    { action: 'B', userId: 4 },
    { action: 'B', userId: 4 },
    { action: 'C', userId: 6 },
]

function findErrorUser(data, input) {
    const map = new Map();
    Object.entries(data).forEach(([value, key]) => {
        if (map.has(key.userId)) {
            map.set(key.userId, map.get(key.userId) + key.action);
        } else {
            map.set(key.userId, key.action);
        }
    });
    console.log(map);
    const array = [];
    map.forEach((value, key) => {
        if (value.includes(input)) {
            array.push(key);
        }
    });
    return array;
}
console.log(`UserIds: ${findErrorUser(logs, `ABC`)}`);
