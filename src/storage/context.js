import IsNil from 'lodash-es/isNil';

import {Base} from '../base';


export class StorageContext extends Base {
    constructor(storage, name) {
        super();

        this._storage = storage;
        this._name = name;

        if(IsNil(this._name)) {
            throw new Error('Invalid value provided for the "name" parameter');
        }
    }

    static get supported() {
        return true;
    }

    get name() {
        return this._name;
    }

    context(name) {
        return new StorageContext(this._storage, this._name + ':' + name);
    }

    key(key) {
        return this._name + ':' + encodeURIComponent(key);
    }

    remove(key) {
        return this._storage.remove(this.key(key));
    }

    // region Get

    get(key) {
        return this._storage.get(this.key(key));
    }

    getBoolean(key) {
        return this._storage.getBoolean(this.key(key));
    }

    getFloat(key) {
        return this._storage.getFloat(this.key(key));
    }

    getInteger(key) {
        return this._storage.getInteger(this.key(key));
    }

    getObject(key) {
        return this._storage.getObject(this.key(key));
    }

    getString(key) {
        return this._storage.getString(this.key(key));
    }

    // endregion

    // region Put

    put(key, value) {
        return this._storage.put(this.key(key), value);
    }

    putBoolean(key, value) {
        return this._storage.putBoolean(this.key(key), value);
    }

    putFloat(key, value) {
        return this._storage.putFloat(this.key(key), value);
    }

    putInteger(key, value) {
        return this._storage.putInteger(this.key(key), value);
    }

    putObject(key, value) {
        return this._storage.putObject(this.key(key), value);
    }

    putString(key, value) {
        return this._storage.putString(this.key(key), value);
    }

    // endregion
}
