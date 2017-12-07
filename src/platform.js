import Bowser from 'bowser';
import IsNil from 'lodash-es/isNil';
import Merge from 'lodash-es/merge';
import ToNumber from 'lodash-es/toNumber';

import {NotImplementedError} from 'neon-extension-framework/core/exceptions';

import {Base} from './base';


const VersionRegex = /^(\d+)(?:\.(\d+))?/g;

export const Platforms = {
    Unknown: 'Unknown',

    Chrome: 'Chrome',
    Edge: 'Edge',
    Firefox: 'Firefox',
    Opera: 'Opera'
};

export const PlatformTypes = {
    Unknown: 'Unknown',

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
        if(IsNil(version)) {
            return new Version(null);
        }

        // Match version against pattern
        let match = VersionRegex.exec(version);

        if(IsNil(match)) {
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
        return Platforms.Unknown;
    }

    get type() {
        return PlatformTypes.Unknown;
    }

    get version() {
        return this._version;
    }
}

export default new Platform();
