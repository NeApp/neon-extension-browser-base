import IsEqual from 'lodash-es/isEqual';
import IsEqualWith from 'lodash-es/isEqualWith';
import IsNil from 'lodash-es/isNil';

import {NotImplementedError} from 'neon-extension-framework/core/exceptions';

import {Base} from '../base';


export class DeclarativeContent extends Base {
    addRules(rules) {
        throw new NotImplementedError();
    }

    removeRules(ruleIdentifiers) {
        throw new NotImplementedError();
    }

    getRules(ruleIdentifiers) {
        throw new NotImplementedError();
    }

    matches(a, b) {
        if(IsNil(a) && IsNil(b)) {
            return true;
        }

        if(IsNil(a) || IsNil(b)) {
            return false;
        }

        return (
            IsEqual(a.id, b.id) &&

            IsEqualWith(a.actions, b.actions, (a, b) => {
                if(Array.isArray(a) && Array.isArray(b)) {
                    return a.length === b.length;
                }

                return a.matches(b);
            }) &&

            IsEqualWith(a.conditions, b.conditions, (a, b) => {
                if(Array.isArray(a) && Array.isArray(b)) {
                    return a.length === b.length;
                }

                return a.matches(b);
            })
        );
    }
}
