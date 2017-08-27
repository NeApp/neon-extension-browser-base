import {NotImplementedError} from 'eon.extension.framework/core/exceptions';

import {EmitterBase} from '../base';


export class Messaging extends EmitterBase {
    // region Web

    connect(...args) {
        throw new NotImplementedError();
    }

    sendMessage(...args) {
        throw new NotImplementedError();
    }

    // endregion

    // region Native

    connectNative(...args) {
        throw new NotImplementedError();
    }

    sendNativeMessage(...args) {
        throw new NotImplementedError();
    }

    // endregion
}
