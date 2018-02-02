import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base'
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Meteor.loginWithMicrosoft({
    requestOfflineToken: true,
    requestPermissions: ['wl.emails'] // Permission scopes are found here: https://msdn.microsoft.com/en-us/library/hh243648.aspx
}, function(error) {
    if (error) {
        console.error('Login failed:', error.reason || error);
    }
    else {
        console.log('Logged in!');
   		 }
});
ServiceConfiguration.configurations.upsert(
  { service: 'microsoft' },
  {

    $set: {
      loginStyle: "popup",
      clientId: "b9a04d2a-b015-491b-860b-5794ee9e2d2a", // See table below for correct property name!
      secret: "kdeivrGY009#}fQKTNT66{^"
    }
  }
);
