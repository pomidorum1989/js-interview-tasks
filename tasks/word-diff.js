function isDifferentByPosition(firstWord, secondWord, numberOfLetters) {
    let counter = 0;

    if (firstWord.length != secondWord.length) {
        console.log(`Different words length`);
    }

    // const length = firstWord.length < secondWord.length ? firstWord.length : secondWord.length;
    const length = Math.min(firstWord.length, secondWord.length);

    for (let index = 0; index < length; index++) {
        if (firstWord[index] !== secondWord[index]) {
            counter++;
        }
    }
    if (counter == numberOfLetters) {
        return true;
    } else if (counter === 0) {
        console.log('The words are the same');
    } else {
        console.log(`The words are different on ${counter} letter(s)`);
    }
    return false;
}

isDifferentByPosition('one', 'two', 0);
isDifferentByPosition('one', 'two', 1);
isDifferentByPosition('one', 'two', 2);
isDifferentByPosition('one', 'one', 1);
isDifferentByPosition('tnw', 'one', 1);

function isDifferentByQuantity(firstWord, secondWord) {
    let firstMap = new Map();
    let secondMap = new Map();

    Array.from(firstWord).forEach(element => {
        if (firstMap.has(element)) {
            firstMap.set(element, firstMap.get(element) + 1)
        } else {
            firstMap.set(element, 1)
        }
    });

    firstMap.forEach((value, key) => {
        console.log(`${key} : ${value}`);
    });

    [...secondWord].forEach(element => {
        if (secondMap.has(element)) {
            secondMap.set(element, firstMap.get(element) + 1)
        } else {
            secondMap.set(element, 1)
        }
    });

    console.log(`\n`)
    secondMap.forEach((value, key) => {
        console.log(`${key} : ${value}`);
    });


    firstMap.forEach((v,k) => {
        if (!secondMap.has(v) || !secondMap.get(k) === v) {
            console.log(`${k} => ${v} not equal to ${k} => ${secondMap.get(k)}`);
            return false;
        }
        return true;
    });

}

isDifferentByQuantity('one', 'two');
isDifferentByQuantity('one', 'twoo');
