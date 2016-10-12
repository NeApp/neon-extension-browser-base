import {NotImplementedError} from 'eon.extension.framework/core/exceptions';

import {Base} from './base';


export default class Extension extends Base {
    get id() {
        throw new NotImplementedError();
    }

    getCallbackPattern() {
        throw new NotImplementedError();
    }

    getCallbackUrl(id, path) {
        return this.getUrl(path);
    }

    getUrl(path) {
        throw new NotImplementedError();
    }
}
