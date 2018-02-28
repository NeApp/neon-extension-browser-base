import {NotImplementedError} from 'neon-extension-framework/core/exceptions';

import {EmitterBase} from '../base';


export class Port extends EmitterBase {
    static get supported() {
        return true;
    }

    get connected() {
        throw new NotImplementedError();
    }

    get error() {
        throw new NotImplementedError();
    }

    get name() {
        throw new NotImplementedError();
    }

    get sender() {
        throw new NotImplementedError();
    }

    disconnect() {
        throw new NotImplementedError();
    }

    postMessage(message) {
        throw new NotImplementedError();
    }

    dispose() {
        throw new NotImplementedError();
    }
}
