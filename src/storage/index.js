import Log from 'neon-extension-framework/core/logger';
import {NotImplementedError} from 'neon-extension-framework/core/exceptions';

import {Base} from '../base';
import {StorageContext} from './context';


export class Storage extends Base {
    static get supported() {
        return true;
    }

    get browser() {
        throw new NotImplementedError();
    }

    context(name) {
        return new StorageContext(this, name);
    }

    remove(key) {
        return new Promise(function(resolve, reject) {
            localStorage.removeItem(key);
            resolve();
        });
    }

    // region Get

    get(key) {
        return new Promise(function(resolve) {
            resolve(localStorage.getItem(key));
        });
    }

    getBoolean(key) {
        return this.get(key).then(function(value) {
            if(typeof value === 'boolean' || value === null) {
                return value;
            }

            if(value === 'true') {
                return true;
            }

            if(value === 'false') {
                return false;
            }

            Log.warn('Invalid boolean stored (%o), using null instead', value);
            return null;
        });
    }

    getFloat(key) {
        return this.get(key).then(function(value) {
            if(value === null) {
                return value;
            }

            return parseFloat(value);
        });
    }

    getInteger(key) {
        return this.get(key).then(function(value) {
            if(value === null) {
                return value;
            }

            return parseInt(value, 10);
        });
    }

    getObject(key) {
        return this.get(key).then(function(value) {
            if(value === null) {
                return value;
            }

            return JSON.parse(value);
        });
    }

    getString(key) {
        return this.get(key);
    }

    // endregion

    // region Put

    put(key, value) {
        return new Promise(function(resolve) {
            localStorage.setItem(key, value);
            resolve();
        });
    }

    putBoolean(key, value) {
        if(value === true) {
            value = 'true';
        } else if(value === false) {
            value = 'false';
        } else {
            Log.warn('Invalid boolean provided (%o), using null instead', value);
            value = null;
        }

        return this.put(key, value);
    }

    putFloat(key, value) {
        if(typeof value === 'number') {
            value = value.toString();
        } else {
            Log.warn('Invalid float provided (%o), using null instead', value);
            value = null;
        }

        return this.put(key, value);
    }

    putInteger(key, value) {
        if(typeof value === 'number') {
            value = value.toString();
        } else {
            Log.warn('Invalid int provided (%o), using null instead', value);
            value = null;
        }

        return this.put(key, value);
    }

    putObject(key, value) {
        if(typeof value === 'object') {
            value = JSON.stringify(value);
        } else {
            Log.warn('Invalid object provided (%O), using null instead', value);
            value = null;
        }

        return this.put(key, value);
    }

    putString(key, value) {
        return this.put(key, value);
    }

    // endregion
}
