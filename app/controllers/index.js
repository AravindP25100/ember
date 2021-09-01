import Controller from '@ember/controller';
import { commerce } from 'faker';

export default Controller.extend({
  actions: {
    deletePost(post) {
      let confirmed = window.confirm(
        'Are you sure you wanna delete this record?'
      );
      if (confirmed) {
        post.destroyRecord();
      }
    },
  }
});
