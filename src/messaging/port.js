import {NotImplementedError} from 'eon.extension.framework/core/exceptions';

import {EmitterBase} from '../base';


export default class Port extends EmitterBase {
    static get supported() {
        return false;
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
