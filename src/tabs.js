import {NotImplementedError} from 'neon-extension-framework/core/exceptions';

import {EmitterBase} from './base';


export class Tabs extends EmitterBase {
    create(properties) {
        throw new NotImplementedError();
    }

    update(tabId, properties) {
        throw new NotImplementedError();
    }
}
