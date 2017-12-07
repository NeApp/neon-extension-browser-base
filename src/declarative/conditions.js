import IsEqual from 'lodash-es/isEqual';
import IsNil from 'lodash-es/isNil';

import {Base} from '../base';


export class PageStateMatcher extends Base {
    constructor(options) {
        super();

        if(IsNil(options)) {
            throw new Error('Invalid value provided for the "options" parameter');
        }

        this.pageUrl = !IsNil(options.pageUrl) ? options.pageUrl : null;
        this.pattern = !IsNil(options.pattern) ? options.pattern : null;

        this.css = !IsNil(options.css) ? options.css : [];
        this.isBookmarked = !IsNil(options.isBookmarked) ? options.isBookmarked : false;
    }

    static get supported() {
        return true;
    }

    matches(other) {
        if(IsNil(other)) {
            return false;
        }

        if(!(other instanceof PageStateMatcher)) {
            return false;
        }

        return (
            IsEqual(this.pageUrl, other.pageUrl) &&
            IsEqual(this.isBookmarked, other.isBookmarked) &&

            IsEqual(this.css.sort(), other.css.sort())
        );
    }
}
