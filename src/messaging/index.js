import EventEmitter from 'eventemitter3';

import {NotImplementedError} from 'eon.extension.framework/core/exceptions';


export default class Messaging extends EventEmitter {
    static get supported() {
        return false;
    }

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
