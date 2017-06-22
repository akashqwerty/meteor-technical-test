import {Tasks} from '../imports/api/collections/collections.js';

Meteor.methods({
  'insertTask': (task) => {
    var insertedId = Tasks.insert(task);
    return insertedId;
  },
  'createNewUser': (user) => {
  	id = Accounts.createUser({
            email: user.email,
            password: user.password,
            username:user.username,
            profile: {
                firstName: user.name
            }

        });
  	return id;
  }
})
