import Bowser from 'bowser';
import Merge from 'lodash-es/merge';
import ToNumber from 'lodash-es/toNumber';

import {NotImplementedError} from 'neon-extension-framework/core/exceptions';
import {isDefined} from 'neon-extension-framework/core/helpers';

import {Base} from './base';


const VersionRegex = /^(\d+)(?:\.(\d+))?/g;

export const Platforms = {
    Chrome: 'Chrome',
    Edge: 'Edge',
    Firefox: 'Firefox',
    Opera: 'Opera'
};

export const PlatformTypes = {
    WebExtension: 'WebExtension'
};

export class Version {
    constructor(name, options) {
        options = Merge({
            major: 0,
            minor: 0
        }, options || {});

        this.name = name;

        this.major = options.major;
        this.minor = options.minor;
    }

    static parse(version, options) {
        if(!isDefined(version)) {
            return new Version(null);
        }

        // Match version against pattern
        let match = VersionRegex.exec(version);

        if(!isDefined(match)) {
            return new Version(null);
        }

        // Create version
        return new Version(version, {
            major: ToNumber(match[1] || 0),
            minor: ToNumber(match[2] || 0),

            // Override with provided values
            ...options
        });
    }
}

export class Platform extends Base {
    constructor() {
        super();

        // Parse version
        this._version = Version.parse(Bowser.version);
    }

    static get supported() {
        return true;
    }

    get name() {
        throw new NotImplementedError();
    }

    get type() {
        throw new NotImplementedError();
    }

    get version() {
        return this._version;
    }
}
