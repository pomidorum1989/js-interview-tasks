class Transport {
    #size;
    #isPayed;
    #transportId;

    constructor(size, transportId) {
        this.#size = size;
        this.#isPayed = false;
        this.#transportId = transportId;
    }

    get size() {
        return this.#size;
    }

    get isPayed() {
        return this.#isPayed;
    }

    set isPayed(isPayed) {
        this.#isPayed = isPayed;
    }

    get transportId() {
        return this.#transportId
    }

    set transportId(id) {
        this.#transportId = id;
    }
}

class Van extends Transport {
    constructor(id) {
        super(3, id);
    }
}

class Car extends Transport {
    constructor(id) {
        super(2, id);
    }
}

class Motocycle extends Transport {
    constructor(id) {
        super(1, id);
    }
}

class ParkingLot {
    #slots = []

    constructor(parkingSize) {
        this.#slots = new Array(parkingSize).fill(null);
        console.log(`Parking lot with size ${parkingSize} was created`);
    }

    parking(transport) {
        if (this.#slots.every(slot => slot !== null)) {
            console.log(`Transport parking is already full`)
            return false
        }

        for (let i = 0; i < this.#slots.length; i++) {
            const element = this.#slots[i];
            if (element === null) {
                this.#slots[i] = transport.transportId;
                console.info(`Transport with id ${transport.transportId} was parked`)
                transport.isPayed = true;
                return true;
            }
        }
    }

    removeParkedCar(transport) {
        if (this.#slots.every(slot => slot !== transport.transportId)) {
            console.log(`Transport with id ${transport.transportId} was not found`)
            return false;
        }

        for (let i = 0; i < this.#slots.length; i++) {
            const element = this.#slots[i];
            if (element === transport.transportId) {
                this.#slots[i] = null;
                console.info(`Transport with id ${transport.transportId} is removed`)
                return true
            }
        }

    }

    getParkingLotSize() {
        console.log(`Parking lot size ${this.#slots.length}`)
        return this.#slots.length
    }


    getAvailableSlotsSize() {
        const available = this.#slots.filter(slot => slot === null).length
        console.log(`Available parking slots: ${available}`)
        return available
    }

    isParkingFull() {
        const isFull = this.getAvailableSlotsSize === 0;
        if (isFull) {
            console.info(`Parking is full`)
        } else {
            console.log('Parking has free spots')
        }
        return isFull;
    }
}


const van = new Van(123);
const motocycle = new Motocycle(321);
const car = new Car(132)

const parkingLot = new ParkingLot(10);

parkingLot.parking(van);
parkingLot.parking(motocycle);
parkingLot.parking(car);

parkingLot.getParkingLotSize();
parkingLot.getAvailableSlotsSize();

parkingLot.removeParkedCar(van);
parkingLot.removeParkedCar(motocycle);
parkingLot.removeParkedCar(car);

parkingLot.getParkingLotSize();
parkingLot.getAvailableSlotsSize();
parkingLot.isParkingFull()

export default ParkingLot