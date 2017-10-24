import {NotImplementedError} from 'neon-extension-framework/core/exceptions';

import {Base} from '../base';


export class WebRequestEvent extends Base {
    constructor(name) {
        super();

        this.name = name;
    }

    static get supported() {
        return true;
    }

    addListener(callback, options) {
        throw new NotImplementedError();
    }

    removeListener(callback, options) {
        throw new NotImplementedError();
    }
}
