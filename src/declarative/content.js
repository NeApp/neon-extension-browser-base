import isEqual from 'lodash-es/isEqual';
import isEqualWith from 'lodash-es/isEqualWith';

import {NotImplementedError} from 'eon.extension.framework/core/exceptions';
import {isDefined} from 'eon.extension.framework/core/helpers';

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
        if(!isDefined(a) && !isDefined(b)) {
            return true;
        }

        if(!isDefined(a) || !isDefined(b)) {
            return false;
        }

        return (
            isEqual(a.id, b.id) &&

            isEqualWith(a.actions, b.actions, (a, b) => {
                if(Array.isArray(a) && Array.isArray(b)) {
                    return a.length === b.length;
                }

                return a.matches(b);
            }) &&

            isEqualWith(a.conditions, b.conditions, (a, b) => {
                if(Array.isArray(a) && Array.isArray(b)) {
                    return a.length === b.length;
                }

                return a.matches(b);
            })
        );
    }
}
