import {NotImplementedError} from 'eon.extension.framework/core/exceptions';

import {EmitterBase} from '../base';


export class Messaging extends EmitterBase {
    // region Web

    connect(extensionId, options) {
        throw new NotImplementedError();
    }

    sendMessage(extensionId, message, options) {
        throw new NotImplementedError();
    }

    // endregion

    // region Native

    connectNative(application) {
        throw new NotImplementedError();
    }

    sendNativeMessage(application, message) {
        throw new NotImplementedError();
    }

    // endregion
}
