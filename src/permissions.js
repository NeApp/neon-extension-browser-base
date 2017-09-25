import {NotImplementedError} from 'neon-extension-framework/core/exceptions';

import {EmitterBase} from './base';


export class Permissions extends EmitterBase {
    all() {
        throw new NotImplementedError();
    }

    contains(options) {
        throw new NotImplementedError();
    }

    request(options) {
        throw new NotImplementedError();
    }

    remove(options) {
        throw new NotImplementedError();
    }

    dispose() {
        throw new NotImplementedError();
    }
}
