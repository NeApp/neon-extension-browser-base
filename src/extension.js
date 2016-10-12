import {NotImplementedError} from 'eon.extension.framework/core/exceptions';

import {Base} from './base';


export default class Extension extends Base {
    get key() {
        return this.id.replace(/[^\w\s]/gi, '');
    }

    get id() {
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
