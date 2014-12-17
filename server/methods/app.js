Meteor.methods({
  sendEmail: function (to, from, subject, html) {
    check([to, from, subject, html], [String]);

    // Lets email sending be unblocking
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      html: html
    });
  }
});