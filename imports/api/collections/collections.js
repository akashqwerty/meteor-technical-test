import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'



export const Tasks = new Mongo.Collection('tasks');


Tasks.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return 1; 
  } ,
  update: function(userId, doc) {
    // only allow updating if you are logged in
    return 1; 
  },
  // remove: function(userID, doc) {
  //   //only allow deleting if you are owner
  //   return doc.submittedById === Meteor.userId();
  // }
});
//export default Tasks;