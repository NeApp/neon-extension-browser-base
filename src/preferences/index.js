import PreferencesContext from './context';
import {Base} from '../base';


export default class Preferences extends Base {
    constructor(storage) {
        super();

        this._storage = storage;

        this._definitions = {};
    }

    static get supported() {
        return true;
    }

    get bucket() {
        return this._storage.context('preferences');
    }

    context(name) {
        return new PreferencesContext(this, name);
    }

    register(item) {
        // Ensure option/group hasn't already been registered
        if(typeof this._definitions[item.id] !== 'undefined') {
            console.warn('Option %o has already been registered', item.id);
            return;
        }

        // Store reference
        this._definitions[item.id] = item;

        // Process item registration
        if(item.type === 'group') {
            console.debug('Registered preference group: %o', item.id, item);

            // Register group children
            for(let i = 0; i < item.children.length; ++i) {
                this.register(item.children[i]);
            }
        } else {
            console.debug('Registered preference: %o', item.id, item);
        }
    }

    remove(key) {
        return this.bucket.remove(key);
    }

    // region Get

    get(key) {
        // Retrieve option definition
        let definition = this._definitions[key];

        if(typeof definition === 'undefined') {
            return Promise.reject(
                new Error('No preference definition found for: "' + key + '"')
            );
        }

        // Retrieve preference value from storage
        return this.bucket.get(key).then((value) => {
            if(value === null) {
                return definition.options.default;
            }

            return value;
        });
    }

    getBoolean(key) {
        // Retrieve option definition
        let definition = this._definitions[key];

        if(typeof definition === 'undefined') {
            return Promise.reject(
                new Error('No preference definition found for: "' + key + '"')
            );
        }

        // Retrieve preference value from storage
        return this.bucket.getBoolean(key).then((value) => {
            if(value === null) {
                return definition.options.default;
            }

            return value;
        });
    }

    getFloat(key) {
        // Retrieve option definition
        let definition = this._definitions[key];

        if(typeof definition === 'undefined') {
            return Promise.reject(
                new Error('No preference definition found for: "' + key + '"')
            );
        }

        // Retrieve preference value from storage
        return this.bucket.getFloat(key).then((value) => {
            if(value === null) {
                return definition.options.default;
            }

            return value;
        });
    }

    getInteger(key) {
        // Retrieve option definition
        let definition = this._definitions[key];

        if(typeof definition === 'undefined') {
            return Promise.reject(
                new Error('No preference definition found for: "' + key + '"')
            );
        }

        // Retrieve preference value from storage
        return this.bucket.getInteger(key).then((value) => {
            if(value === null) {
                return definition.options.default;
            }

            return value;
        });
    }

    getObject(key) {
        // Retrieve option definition
        let definition = this._definitions[key];

        if(typeof definition === 'undefined') {
            return Promise.reject(
                new Error('No preference definition found for: "' + key + '"')
            );
        }

        // Retrieve preference value from storage
        return this.bucket.getObject(key).then((value) => {
            if(value === null) {
                return definition.options.default;
            }

            return value;
        });
    }

    getString(key) {
        // Retrieve option definition
        let definition = this._definitions[key];

        if(typeof definition === 'undefined') {
            return Promise.reject(
                new Error('No preference definition found for: "' + key + '"')
            );
        }

        // Retrieve preference value from storage
        return this.bucket.getString(key).then((value) => {
            if(value === null) {
                return definition.options.default;
            }

            return value;
        });
    }

    // endregion

    // region Put

    put(key, value) {
        return this.bucket.put(key, value);
    }

    putBoolean(key, value) {
        return this.bucket.putBoolean(key, value);
    }

    putFloat(key, value) {
        return this.bucket.putFloat(key, value);
    }

    putInteger(key, value) {
        return this.bucket.putInteger(key, value);
    }

    putObject(key, value) {
        return this.bucket.putObject(key, value);
    }

    putString(key, value) {
        return this.bucket.putString(key, value);
    }

    // endregion
}
