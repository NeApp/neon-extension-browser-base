import EventEmitter from 'eventemitter3';

import {isDefined} from 'neon-extension-framework/core/helpers';


export function isSupported(key) {
    let supported = neon.browser.api[key];

    if(!isDefined(supported)) {
        return false;
    }

    return supported === true;
}

export class Base {
    static get api() {
        throw new Error('Not Implemented');
    }

    static get key() {
        throw new Error('Not Implemented');
    }

    static get supported() {
        return isSupported(this.key) && isDefined(this.api);
    }

    get available() {
        return true;
    }

    get api() {
        return this.constructor.api;
    }

    get supported() {
        return this.constructor.supported;
    }
}

export class EmitterBase extends EventEmitter {
    static get api() {
        throw new Error('Not Implemented');
    }

    static get key() {
        throw new Error('Not Implemented');
    }

    static get supported() {
        return isSupported(this.key) && isDefined(this.api);
    }

    get available() {
        return true;
    }

    get api() {
        return this.constructor.api;
    }

    get supported() {
        return this.constructor.supported;
    }
}
