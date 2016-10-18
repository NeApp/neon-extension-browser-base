import {NotImplementedError} from 'eon.extension.framework/core/exceptions';
import {isDefined} from 'eon.extension.framework/core/helpers';
import MessagingBus from 'eon.extension.framework/messaging/bus';

import {StorageContext} from './context';
import {Base} from '../base';

let Bus = null;


export class Storage extends Base {
    constructor() {
        super();

        // Initialize messaging bus if we aren't in the extension context
        if(window.location.origin !== this.browser.extension.origin && !isDefined(Bus)) {
            Bus = new MessagingBus(window.location.hostname + ':storage');
            Bus.connect('eon.extension.core:storage');
        }
    }

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
        if(window.location.origin !== this.browser.extension.origin) {
            throw new NotImplementedError();
        }

        return new Promise(function(resolve, reject) {
            localStorage.removeItem(key);
            resolve();
        });
    }

    // region Get

    get(key) {
        if(window.location.origin !== this.browser.extension.origin) {
            if(!isDefined(Bus)) {
                return Promise.reject(new Error('Messaging bus is not available'));
            }

            // Get item via background page
            return Bus.request('eon.extension.core:storage', 'storage.get', key)
                .then((result) => {
                    if(result.success) {
                        return result.value;
                    }

                    return Promise.reject(new Error('Unable to retrieve item'));
                });
        }

        // Get item directly from `localStorage`
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

            console.warn('Invalid boolean stored (%o), using null instead', value);
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
        if(window.location.origin !== this.browser.extension.origin) {
            throw new NotImplementedError();
        }

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
            console.warn('Invalid boolean provided (%o), using null instead', value);
            value = null;
        }

        return this.put(key, value);
    }

    putFloat(key, value) {
        if(typeof value === 'number') {
            value = value.toString();
        } else {
            console.warn('Invalid float provided (%o), using null instead', value);
            value = null;
        }

        return this.put(key, value);
    }

    putInteger(key, value) {
        if(typeof value === 'number') {
            value = value.toString();
        } else {
            console.warn('Invalid int provided (%o), using null instead', value);
            value = null;
        }

        return this.put(key, value);
    }

    putObject(key, value) {
        if(typeof value === 'object') {
            value = JSON.stringify(value);
        } else {
            console.warn('Invalid object provided (%O), using null instead', value);
            value = null;
        }

        return this.put(key, value);
    }

    putString(key, value) {
        return this.put(key, value);
    }

    // endregion
}
