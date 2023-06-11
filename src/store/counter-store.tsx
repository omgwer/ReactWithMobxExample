import {action, computed, makeAutoObservable, makeObservable, observable} from "mobx";


class CounterStore {
    count = 0;

    get total() {
        return this.count * 2;
    }

    constructor() {
        makeAutoObservable(this)
        // makeObservable(this, {
        //     count: observable,
        //     increment: action,
        //     decrement: action,
        //     total: computed
        // })
    }

    increment = (value:  number) => {
        this.count += value;
    }

    decrement = (value: number) => {
        this.count -= value;
    }
}

export default CounterStore;