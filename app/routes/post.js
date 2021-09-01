import Route from '@ember/routing/route';
import { lorem } from 'faker';

export default class PostRoute extends Route {
  model(params) {
    return this.store.findRecord('post', params.id);
  }
  setupController(controller, model) {
    Ember.set(controller, 'post', model);
  }
}
