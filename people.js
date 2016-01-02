Group = new Mongo.Collection("group");
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
      },
      //test data
                email: function(email){
                  email = "test@email";
                  return email;
                },

                fullname: function(fullname){
                  fullname = "Mr test Mrs Test";
                  return fullname;
                },
                member_key: function(member_key){
                  member_key = 186318;
                  return member_key;
                }
      // end test data

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
       // add to the group list
      "click .addToGroup": function(event, Template){
        Group.insert({
          member_key: 1,
          fullname: 2,
          email: 3
        })
        Template.$(".groupList").append("<li>" + Group.member_key + Group.fullname + Group.email + "</li>");
      }
      /*
      "click .deleteButton": function(event){
        
      }*/

  });

}
  
  


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
