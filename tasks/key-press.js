import readline from 'readline';

const map = new Map();

function manual() {
    const mapManual = new Map();
    console.log(`Manual processing`);

    let data = Object.freeze ({
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
        if (value.includes('qwerty')) {
            console.log(key)
        }
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Enter text')

rl.on('line', (input) => {
    const firstInput = input.trim().toLowerCase();

    if (firstInput === 'exit') {
        rl.close();
    } else if (firstInput === 'manual') {
        manual();
        rl.close();
    } else {
        console.log(`Received: ${input}`);
    }

    if (map.has(input)) {
        map.set(input, map.get(input) + 1);
    } else {
        map.set(input, 1)
    }

});

// rl.on('close', () => {
//     console.log('Goodbye!');
//     map.forEach((value) => {
//         if (value > 1) {
//             console.log(`${value} was repeated more than 1 time`)
//         }
//     });
//     console.log(map);
// });
