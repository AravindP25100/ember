import EmberRouter from '@ember/routing/router';
import config from 'api-with-fake-server/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('post', { path: '/post/:id' });
  this.route('create', { path: '/post/new' });
  this.route('update', {path:'/post/Edit/:id'});
});
