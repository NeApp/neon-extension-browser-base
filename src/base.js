import EventEmitter from 'eventemitter3';


export class Base {
    static get supported() {
        return false;
    }

    get supported() {
        return this.constructor.supported;
    }
}

export class EmitterBase extends EventEmitter {
    static get supported() {
        return false;
    }

    get supported() {
        return this.constructor.supported;
    }
}
