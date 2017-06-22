import { Router } from 'meteor/iron:router'
import '../../ui/templates/home/home'
import '../../ui/templates/update/update.js';
import '../../ui/templates/register/register.js';

Router.route('/', function () {
    this.render('login');
});
Router.route('/update/:taskId', function () {
	if(Meteor.userId()){
		this.render('updatetask');
	}else{
		Router.go('/');
	}
    
});
Router.route('/registration', function () {
    this.render('register');
});
Router.route('/home', function () {
	if(Meteor.userId()){
    this.render('home');
	}else{
		Router.go('/');
	}
});