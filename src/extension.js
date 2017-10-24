import {NotImplementedError} from 'neon-extension-framework/core/exceptions';

import {EmitterBase} from './base';


export class Extension extends EmitterBase {
    static get supported() {
        return true;
    }

    get id() {
        throw new NotImplementedError();
    }

    get key() {
        return this.id.replace(/[^\w\s]/gi, '');
    }

    get origin() {
        throw new NotImplementedError();
    }

    getCallbackPattern() {
        return this.getCallbackUrl('*/*/callback/callback.html*');
    }

    getCallbackUrl(path) {
        return this.getUrl(path);
    }

    getUrl(path) {
        throw new NotImplementedError();
    }

    isBackgroundPage() {
        return window.location.href.endsWith('/_generated_background_page.html');
    }

    isExtensionPage() {
        return window.location.origin === this.origin;
    }
}
