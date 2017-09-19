import isEqual from 'lodash-es/isEqual';
import isEqualWith from 'lodash-es/isEqualWith';

import Log from 'eon.extension.framework/core/logger';
import {NotImplementedError} from 'eon.extension.framework/core/exceptions';
import {isDefined} from 'eon.extension.framework/core/helpers';

import {Base} from '../base';


export class DeclarativeContent extends Base {
    addRules(rules) {
        throw new NotImplementedError();
    }

    removeRules(ruleIdentifiers) {
        throw new NotImplementedError();
    }

    getRules(ruleIdentifiers) {
        throw new NotImplementedError();
    }

    matches(a, b) {
        if(!isDefined(a) && !isDefined(b)) {
            return true;
        }

        if(!isDefined(a) || !isDefined(b)) {
            return false;
        }

        return (
            isEqual(a.id, b.id) &&

            isEqualWith(a.actions, b.actions, (a, b) => {
                if(Array.isArray(a) && Array.isArray(b)) {
                    return a.length === b.length;
                }

                return a.matches(b);
            }) &&

            isEqualWith(a.conditions, b.conditions, (a, b) => {
                if(Array.isArray(a) && Array.isArray(b)) {
                    return a.length === b.length;
                }

                return a.matches(b);
            })
        );
    }
}

// region Actions

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

// endregion

// region Conditions

export class PageStateMatcher extends Base {
    constructor(options) {
        super();

        if(!isDefined(options)) {
            throw new Error('Invalid value provided for the "options" parameter');
        }

        this.pageUrl = isDefined(options.pageUrl) ? options.pageUrl : null;
        this.pattern = isDefined(options.pattern) ? options.pattern : null;

        this.css = isDefined(options.css) ? options.css : [];
        this.isBookmarked = isDefined(options.isBookmarked) ? options.isBookmarked : false;
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
            isEqual(this.pageUrl, other.pageUrl) &&
            isEqual(this.isBookmarked, other.isBookmarked) &&

            isEqual(this.css.sort(), other.css.sort())
        );
    }
}

// endregion
