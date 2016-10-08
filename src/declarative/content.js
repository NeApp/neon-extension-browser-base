import {NotImplementedError} from 'eon.extension.framework/core/exceptions';


export default class DeclarativeContent {
    static get supported() {
        return false;
    }

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

export class RequestContentScript {
    static get supported() {
        return true;
    }

    constructor(options) {
        this.options = options;
    }
}

export class SetIcon {
    static get supported() {
        return true;
    }

    constructor(options) {
        this.options = options;
    }
}

export class ShowPageAction {
    static get supported() {
        return true;
    }
}

// endregion

// region Conditions

export class PageStateMatcher {
    static get supported() {
        return true;
    }

    constructor(options) {
        this.options = options;
    }
}

// endregion
