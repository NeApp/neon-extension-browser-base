import {isDefined} from 'eon.extension.framework/core/helpers';

import {Base} from '../base';


export default class PreferencesContext extends Base {
    constructor(preferences, name) {
        super();

        this._preferences = preferences;
        this._name = name;

        if(!isDefined(this._name)) {
            throw new Error('Invalid value provided for the "name" parameter');
        }

        if(this._name.indexOf(':') !== -1) {
            throw new Error('Context names can\'t contain ":" characters');
        }
    }

    static get supported() {
        return true;
    }

    get name() {
        return this._name;
    }

    remove(key) {
        return this._preferences.remove(this._buildKey(key));
    }

    // region Get

    get(key) {
        return this._preferences.get(this._buildKey(key));
    }

    getBoolean(key) {
        return this._preferences.getBoolean(this._buildKey(key));
    }

    getFloat(key) {
        return this._preferences.getFloat(this._buildKey(key));
    }

    getInteger(key) {
        return this._preferences.getInteger(this._buildKey(key));
    }

    getObject(key) {
        return this._preferences.getObject(this._buildKey(key));
    }

    getString(key) {
        return this._preferences.getString(this._buildKey(key));
    }

    // endregion

    // region Put

    put(key, value) {
        return this._preferences.put(this._buildKey(key), value);
    }

    putBoolean(key, value) {
        return this._preferences.putBoolean(this._buildKey(key), value);
    }

    putFloat(key, value) {
        return this._preferences.putFloat(this._buildKey(key), value);
    }

    putInteger(key, value) {
        return this._preferences.putInteger(this._buildKey(key), value);
    }

    putObject(key, value) {
        return this._preferences.putObject(this._buildKey(key), value);
    }

    putString(key, value) {
        return this._preferences.putString(this._buildKey(key), value);
    }

    // endregion

    // region Private methods

    _buildKey(key) {
        return this._name + ':' + key;
    }

    // endregion
}
