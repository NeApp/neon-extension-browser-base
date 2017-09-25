import {NotImplementedError} from 'neon-extension-framework/core/exceptions';

import {EmitterBase} from './base';


export class Tabs extends EmitterBase {
    update(tabId, properties) {
        throw new NotImplementedError();
    }
}
