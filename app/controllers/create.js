import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createPost(event) {
      event.preventDefault(); // this will stop the default refreshing the web page
      // read the parameters
      //console.log(this.title,this.content)
        if (this.title.length >= 3 && this.body.length >= 3 ) {
            var name = /[^a-zA-Z]/.test(this.name);
            var phone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(
              this.phoneNumber
            );
            var numberLength = (this.phoneNumber.length >= 10 && this.phoneNumber.length <= 15);
            if ((this.name.length >= 3 && !name) && (numberLength && phone)) {
              //create a new record
              console.log(this.phoneNumber);
              let newPost = this.store.createRecord('post', {
                title: this.title,
                body: this.body,
                name: this.name,
                phoneNumber: this.phoneNumber,
              });

              //save the upcoming record
              newPost.save().then(() => {
                // this.transitionToRoute('index');
                this.transitionToRoute('post', newPost.id); // redirect to a created post
              });
            } else {
              if (name) {
                window.alert('Name cannot contains numbers or special characters...');
              }
              else if (!phone) {
                window.alert('Invalid phone number format...');
              }
              else if (!numberLength) {
                window.alert('Invalid phone number length...');
              }
            }
        } else {
          var titleBox = document.getElementById('title');
          var contentBox = document.getElementById('content');
          titleBox.style.borderColor = 'red';
          contentBox.style.borderColor = 'red';
          window.alert(
            'Please enter title and body for the post, Please enter atleast 3 letters for title and body'
          );
        }
    },
  },
});
