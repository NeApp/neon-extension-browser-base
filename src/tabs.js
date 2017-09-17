import {NotImplementedError} from 'eon.extension.framework/core/exceptions';

import {EmitterBase} from './base';


export class Tabs extends EmitterBase {
    update(tabId, properties) {
        throw new NotImplementedError();
    }
}
