import {NotImplementedError} from 'eon.extension.framework/core/exceptions';


export default class Extension {
    static get supported() {
        return false;
    }

    get id() {
        throw new NotImplementedError();
    }

    getUrl(path) {
        throw new NotImplementedError();
    }
}
