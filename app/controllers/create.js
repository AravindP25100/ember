import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createPost(event) {
      event.preventDefault(); // this will stop the default refreshing the web page
      // read the parameters
      //console.log(this.title,this.content)
        if (this.title.length >= 3 && this.body.length >= 3) {
          //create a new record
          let newPost = this.store.createRecord('post', {
            title: this.title,
            body: this.body,
          });

          //save the upcoming record
          newPost.save().then(() => {
            // this.transitionToRoute('index');
            this.transitionToRoute('post', newPost.id); // redirect to a created post
          });
        }
        else {
          var titleBox = document.getElementById('title');
          var contentBox = document.getElementById('content');
          titleBox.style.borderColor = "red";
          contentBox.style.borderColor = 'red';
          window.alert("Please enter title and body for the post, Please enter atleast 3 letters for title and body");
        }
    },
  },
});
