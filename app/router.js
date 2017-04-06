import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this;
  this.route('login');
  this.route('registration');
  this.route('my_account');
  this.route('register');
});

export default Router;
