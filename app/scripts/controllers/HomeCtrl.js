(function() {//interface between view (home.html) and service (Room.js)
    function HomeCtrl(Room, Message, $scope, $cookies) {
      this.rooms = Room.all;
      this.messages = Message.all;
      this.userName = $cookies.get('blocChatCurrentUser');
      //pull userName from text in cookie
      $scope.greeting = "Bloc Chat Home Page!!!";
      //everything made in this controller must be inside this function, or else no accessibility
      this.currentRoom = null;
          //set activeRoom = this.currentRoom so activeRoom value never changes, no matter the context
      //set activeRoom initially to null; user should click on the room they want to see. Then why is view defaulting to viewing the msgs in Tool?
//probably because those are the only messages in the db atm...but no they're not...they're the only ones associated with a room, though.

      this.setCurrentRoom = function(room){
        console.log("Called :", room);
        this.currentRoom = room;
        //Filter Message by new room.$id
        //this.messages = [];
        console.log("This is the room id I passed to getRoomById: ", this.currentRoom.$id);
        this.messages = Message.getByRoomId(this.currentRoom.$id);

      }
      this.pushMessage = Message.push;
      /*this.sendMessage = function(message){
        Message.push(message, activeRoom);*/
//changing activeRoom to currentRoom = null vs. undefined
      //}//when in a Controller use 'this' to reference the Controller object...
       //...the messages in HomeCtrl are saved in the messages property...
        //  var stringDate = Date.now().toDateString(); as suggested by Brady Sutton, throws error in Messages.js and breaks layout here.
    }//$scope = obj that lives in controller that we have access to in template.

    angular
        .module('blocChatEe')
        .controller('HomeCtrl', ['Room', 'Message', '$scope', '$cookies', HomeCtrl]);

})();
