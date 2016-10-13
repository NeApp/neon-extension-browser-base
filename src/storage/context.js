import {isDefined} from 'eon.extension.framework/core/helpers';

import {Base} from '../base';


export class StorageContext extends Base {
    constructor(storage, name) {
        super();

        this._storage = storage;
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
        return this._storage.remove(this._buildKey(key));
    }

    // region Get

    get(key) {
        return this._storage.get(this._buildKey(key));
    }

    getBoolean(key) {
        return this._storage.getBoolean(this._buildKey(key));
    }

    getFloat(key) {
        return this._storage.getFloat(this._buildKey(key));
    }

    getInteger(key) {
        return this._storage.getInteger(this._buildKey(key));
    }

    getObject(key) {
        return this._storage.getObject(this._buildKey(key));
    }

    getString(key) {
        return this._storage.getString(this._buildKey(key));
    }

    // endregion

    // region Put

    put(key, value) {
        return this._storage.put(this._buildKey(key), value);
    }

    putBoolean(key, value) {
        return this._storage.putBoolean(this._buildKey(key), value);
    }

    putFloat(key, value) {
        return this._storage.putFloat(this._buildKey(key), value);
    }

    putInteger(key, value) {
        return this._storage.putInteger(this._buildKey(key), value);
    }

    putObject(key, value) {
        return this._storage.putObject(this._buildKey(key), value);
    }

    putString(key, value) {
        return this._storage.putString(this._buildKey(key), value);
    }

    // endregion

    // region Private methods

    _buildKey(key) {
        return this._name + ':' + key;
    }

    // endregion
}
