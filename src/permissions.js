import {NotImplementedError} from 'eon.extension.framework/core/exceptions';

import EventEmitter from 'eventemitter3';


export default class Permissions extends EventEmitter {
    static get supported() {
        return false;
    }

    all() {
        throw new NotImplementedError();
    }

    contains(options) {
        throw new NotImplementedError();
    }

    request(options) {
        throw new NotImplementedError();
    }

    remove(options) {
        throw new NotImplementedError();
    }

    dispose() {
        throw new NotImplementedError();
    }
}
