import {NotImplementedError} from 'eon.extension.framework/core/exceptions';

import {Base} from '../base';


export default class WebRequestEvent extends Base {
    constructor(name) {
        super();

        this.name = name;
    }

    addListener(callback, options) {
        throw new NotImplementedError();
    }

    removeListener(callback, options) {
        throw new NotImplementedError();
    }
}
