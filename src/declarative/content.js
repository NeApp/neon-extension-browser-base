import {NotImplementedError} from 'eon.extension.framework/core/exceptions';
import {isDefined} from 'eon.extension.framework/core/helpers';

import {Base} from '../base';


export default class DeclarativeContent extends Base {
    addRules(rules) {
        throw new NotImplementedError();
    }

    removeRules(ruleIdentifiers) {
        throw new NotImplementedError();
    }

    getRules(ruleIdentifiers) {
        throw new NotImplementedError();
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
}

export class ShowPageAction extends Base {
    static get supported() {
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
}

// endregion
