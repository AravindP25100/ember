import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editPost(event) {
      event.preventDefault();
      if (
        this.model.get('title').length >= 3 &&
        this.model.get('body').length >= 3 &&
        this.model.get('name').length >= 3 &&
        (this.model.get('phoneNumber').length >= 10 &&
        this.model.get('phoneNumber').length <= 15)) {
        var name = /[^a-zA-Z]/.test(this.model.get('name'));
        var phone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(
          this.model.get('phoneNumber')
        );
        var numberLength = (this.model.get('phoneNumber').length >= 10 && this.model.get('phoneNumber').length <= 15);
        if ((this.model.get('name').length >= 3 && !name) && (numberLength && phone)) {
          let post = this.model;
          post.save().then(() => {
            this.transitionToRoute('post', post.id);
          });
        }
        else {
           if (name) {
             window.alert(
               'Name cannot contains numbers or special characters...'
             );
           } else if (!phone) {
             window.alert('Invalid phone number format...');
           } else if (!numberLength) {
             window.alert('Invalid phone number length...');
           }
        }
      } else {
        window.alert('Enter atleast 3 character for title or content....');
      }
    },
  },
});
