
import {Tasks} from '../imports/api/collections/collections.js';
Meteor.publish('Tasks', function () {

    return Tasks.find();
})