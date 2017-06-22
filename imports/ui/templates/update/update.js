import './update.html';
import { Tasks } from '../../../api/collections/collections'
import { Template } from 'meteor/templating';

Meteor.subscribe('Tasks');
Template.updatetask.helpers({ 
    formCollection() {
        return Tasks;
    },
    mydoc : function(){
    	return Tasks.findOne({_id:Router.current().params.taskId});
    }
});

Template.list.helpers({
   task : function(){
       return Tasks.find().fetch();
   }
});
