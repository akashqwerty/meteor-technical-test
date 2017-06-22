import './register.html';

Template.register.events({
	'submit #registerForm':function(e){
		e.preventDefault();
		var form = {};
		$.each($("#registerForm").find('input'), function(){
			form[this.name] = this.value;
		});
		Meteor.call('createNewUser',form, function(err,res){
			if(err){
				alert(err.reason);
			}else{
				alert("you are registered");
				Router.go('/');
			}

		})
	}
});
Template.login.events({
	'submit #loginForm':function(e){
		e.preventDefault();
		var form = {};
		email = $("#username").val();
		password = $("#password").val();
		Meteor.loginWithPassword(email, password, function(err,res) {
			if(err){
				alert(err.reason);
			}else{
				alert("Welcome "+Meteor.user().profile.firstName+" you are logged in.");
				Router.go('/home');
			}

		})
	}
});