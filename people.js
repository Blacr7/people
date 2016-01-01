
if (Meteor.isClient) {

    Template.people.helpers({
      people: function () { 

        return People.find();
      },

      notAdmin: function(){ var Iam = this.member_key; //alert('people test '+ Iam);

        if (Iam == 'pseudo_0') { return false } else { return true;}
      },

      pathForProfile: function() {
        var person = this;
        var params = {
          personId: person.member_key //personId: person.personId
        };
        var path = FlowRouter.path("profile", params);
        return path;
      }

   /* //peopleList
       peopleList: [{
            personId: 1,
            pic: "/images/user-images/profile-jane.jpg",
            name: "Jane",
          }, 
          {
            personId: 2,
            pic: "/images/user-images/profile-anthony.jpg",
            name: "Anthony",
          },
        ],

    */
    });

    Template.people.events({
      // add to the group table 

  });
}

  


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
