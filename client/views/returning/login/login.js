/*****************************************************************************/
/* Login: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Login.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'submit form': function(e) {
     e.preventDefault();

     var video = document.querySelector('#video');
     var pic = document.querySelector('#canvas').getContext('2d').drawImage(video, 0, 0, 300, 225);

     var guest = Guests.findOne({_id: this.params._id})

     guest = {
      photo: canvas.toDataURL('image/png'),
      staff: $(e.target).find('.cs-selected span').html(),
      startTime: new Date(),
      active: true
     };

     //inserting guest in DB
     guest._id = Guests.insert(guest);

     //sending email to employee
     var guestEmployee = Employees.findOne({name: guest.staff});

     var emailContent = 'Hi ' + guestEmployee.name + '<br> Your Guest, ' + guest.name + ' has arrived at ' + guest.startTime + ' and is waiting in the lobby.<br><img src="' + guest.photo + '"/>'; 

     console.log(guestEmployee);

     console.log(emailContent);

     Meteor.call('sendEmail', 
                 guestEmployee.email,
                 'nurunconcierge@gmail.com',
                 'NurunConcierge: Your Guest ' + guest.name + ' is here!',
                 emailContent);

     Router.go('/guests/'+ guest._id , {_id: guest._id});
   }
});

Template.Login.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.created = function () {
};

Template.Login.rendered = function () {
};

Template.Login.destroyed = function () {
};