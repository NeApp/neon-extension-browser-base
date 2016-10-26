import {NotImplementedError} from 'eon.extension.framework/core/exceptions';

import {EmitterBase} from './base';


export class Extension extends EmitterBase {
    get id() {
        throw new NotImplementedError();
    }

    get key() {
        return this.id.replace(/[^\w\s]/gi, '');
    }

    get origin() {
        throw new NotImplementedError();
    }

    getCallbackPattern() {
        throw new NotImplementedError();
    }

    getCallbackUrl(path) {
        return this.getUrl(path);
    }

    getUrl(path) {
        throw new NotImplementedError();
    }
}
