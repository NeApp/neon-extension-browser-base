import {NotImplementedError} from 'eon.extension.framework/core/exceptions';

import {Base} from './base';


export const Platforms = {
    Chrome: 'chrome',
    Firefox: 'firefox',
    Opera: 'opera'
};

export const PlatformTypes = {
    WebExtensions: 'webextensions'
};

export default class Platform extends Base {
    get type() {
        throw new NotImplementedError();
    }

    get name() {
        throw new NotImplementedError();
    }
}
