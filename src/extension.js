import {NotImplementedError} from 'eon.extension.framework/core/exceptions';

import {Base} from './base';


export default class Extension extends Base {
    get id() {
        throw new NotImplementedError();
    }

    getUrl(path) {
        throw new NotImplementedError();
    }
}
