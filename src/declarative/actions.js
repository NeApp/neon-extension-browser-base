import isEqual from 'lodash-es/isEqual';

import Log from 'eon.extension.framework/core/logger';
import {isDefined} from 'eon.extension.framework/core/helpers';

import {Base} from '../base';


export class RequestContentScript extends Base {
    constructor(options) {
        super();

        if(!isDefined(options)) {
            throw new Error('Invalid value provided for the "options" parameter');
        }

        this.css = isDefined(options.css) ? options.css : [];
        this.js = isDefined(options.js) ? options.js : [];

        this.allFrames = isDefined(options.allFrames) ? options.allFrames : false;
        this.matchAboutBlank = isDefined(options.matchAboutBlank) ? options.matchAboutBlank : false;
    }

    static get supported() {
        return true;
    }

    matches(other) {
        if(!isDefined(other)) {
            return false;
        }

        if(!(other instanceof RequestContentScript)) {
            return false;
        }

        return (
            isEqual(this.allFrames, other.allFrames) &&
            isEqual(this.matchAboutBlank, other.matchAboutBlank) &&

            isEqual(this.css.sort(), other.css.sort()) &&
            isEqual(this.js.sort(), other.js.sort())
        );
    }
}

export class SetIcon extends Base {
    constructor(options) {
        super();

        if(!isDefined(options)) {
            throw new Error('Invalid value provided for the "options" parameter');
        }

        this.imageData = isDefined(options.imageData) ? options.imageData : null;
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
