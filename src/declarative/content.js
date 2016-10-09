import {NotImplementedError} from 'eon.extension.framework/core/exceptions';

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
    static get supported() {
        return true;
    }

    constructor(options) {
        super();

        this.options = options;
    }
}

export class SetIcon extends Base {
    static get supported() {
        return true;
    }

    constructor(options) {
        super();

        this.options = options;
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
    static get supported() {
        return true;
    }

    constructor(options) {
        super();

        this.options = options;
    }
}

// endregion
