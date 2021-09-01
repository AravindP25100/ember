import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editPost(event) {
      event.preventDefault();
      if (this.model.get('title').length >= 3 && this.model.get('body').length >= 3) {
        let post = this.model;
        post.save().then(() => {
          this.transitionToRoute('post', post.id);
        });
        window.alert("Successfully updated!");
      } else {
        window.alert('Enter atleast 3 character for title or content....');
      }
    },
  },
});
