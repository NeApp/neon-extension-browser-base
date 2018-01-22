import EventEmitter from 'eventemitter3';
import IsNil from 'lodash-es/isNil';

import Log from 'neon-extension-framework/core/logger';


export function isSupported(key) {
    let supported = neon.browser.api[key];

    if(IsNil(supported)) {
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
        try {
            return isSupported(this.key) && !IsNil(this.api);
        } catch(e) {
            Log.error('Unable to check if "' + this.key + '" is supported', e && e.message || e);
            return false;
        }
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
        try {
            return isSupported(this.key) && !IsNil(this.api);
        } catch(e) {
            Log.error('Unable to check if "' + this.key + '" is supported', e && e.message || e);
            return false;
        }
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
