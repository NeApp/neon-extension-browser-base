import isEqual from 'lodash-es/isEqual';

import {isDefined} from 'eon.extension.framework/core/helpers';

import {Base} from '../base';


export class PageStateMatcher extends Base {
    constructor(options) {
        super();

        if(!isDefined(options)) {
            throw new Error('Invalid value provided for the "options" parameter');
        }

        this.pageUrl = isDefined(options.pageUrl) ? options.pageUrl : null;
        this.pattern = isDefined(options.pattern) ? options.pattern : null;

        this.css = isDefined(options.css) ? options.css : [];
        this.isBookmarked = isDefined(options.isBookmarked) ? options.isBookmarked : false;
    }

    static get supported() {
        return true;
    }

    matches(other) {
        if(!isDefined(other)) {
            return false;
        }

        if(!(other instanceof PageStateMatcher)) {
            return false;
        }

        return (
            isEqual(this.pageUrl, other.pageUrl) &&
            isEqual(this.isBookmarked, other.isBookmarked) &&

            isEqual(this.css.sort(), other.css.sort())
        );
    }
}
