import {Base} from '../base';
import {WebRequestEvent} from './requestEvent';


export class WebRequest extends Base {
    constructor() {
        super();

        this.onBeforeRequest = this.createEvent('onBeforeRequest');
    }

    createEvent(name) {
        return new WebRequestEvent(name);
    }
}
