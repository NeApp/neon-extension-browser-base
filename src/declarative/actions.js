import IsEqual from 'lodash-es/isEqual';
import IsNil from 'lodash-es/isNil';

import Log from 'neon-extension-framework/core/logger';

import {Base} from '../base';


export class RequestContentScript extends Base {
    constructor(options) {
        super();

        if(IsNil(options)) {
            throw new Error('Invalid value provided for the "options" parameter');
        }

        this.css = !IsNil(options.css) ? options.css : [];
        this.js = !IsNil(options.js) ? options.js : [];

        this.allFrames = !IsNil(options.allFrames) ? options.allFrames : false;
        this.matchAboutBlank = !IsNil(options.matchAboutBlank) ? options.matchAboutBlank : false;
    }

    static get supported() {
        return true;
    }

    matches(other) {
        if(IsNil(other)) {
            return false;
        }

        if(!(other instanceof RequestContentScript)) {
            return false;
        }

        return (
            IsEqual(this.allFrames, other.allFrames) &&
            IsEqual(this.matchAboutBlank, other.matchAboutBlank) &&

            IsEqual(this.css.sort(), other.css.sort()) &&
            IsEqual(this.js.sort(), other.js.sort())
        );
    }
}

export class SetIcon extends Base {
    constructor(options) {
        super();

        if(IsNil(options)) {
            throw new Error('Invalid value provided for the "options" parameter');
        }

        this.imageData = !IsNil(options.imageData) ? options.imageData : null;
    }

    static get supported() {
        return true;
    }

    matches(other) {
        Log.warn('TODO: SetIcon.matches()');
        return false;
    }
}

export class ShowPageAction extends Base {
    static get supported() {
        return true;
    }

    matches(other) {
        return true;
    }
}
