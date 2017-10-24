import {NotImplementedError} from 'neon-extension-framework/core/exceptions';

import {Base} from './base';


export const Platforms = {
    Chrome: 'chrome',
    Edge: 'edge',
    Firefox: 'firefox',
    Opera: 'opera'
};

export const PlatformTypes = {
    WebExtensions: 'webextensions'
};

export class Platform extends Base {
    static get supported() {
        return true;
    }

    get type() {
        throw new NotImplementedError();
    }

    get name() {
        throw new NotImplementedError();
    }
}
