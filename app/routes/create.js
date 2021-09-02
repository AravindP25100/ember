import Route from '@ember/routing/route';

export default Route.extend({
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('title', '');
        controller.set('body', '');
        controller.set('name', '');
        controller.set('phoneNumber', '');
    }
});
