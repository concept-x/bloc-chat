(function() {//interface between view (home.html) and service (Room.js)
    function HomeCtrl(Room, Message, $scope) {
      this.rooms = Room.all;
      this.messages = Message.all;//????
      $scope.greeting = "Bloc Chat Home Page!!!";
      //everything made in this controller must be inside this function, or else no accessibility
      $scope.activeRoom = null;//set activeRoom initially to null; user should click on the room they want to see


      this.setCurrentRoom = function(room){
        console.log("Called :", room);
        this.currentRoom = room;
        //Filter Message by new room.$id
        //this.messages = [];
        console.log("This is the room id I passed to getRoomById: ", this.currentRoom.$id);
        this.messages = Message.getByRoomId(this.currentRoom.$id);
      }//when in a Controller use 'this' to reference the Controller object...
       //...the messages in HomeCtrl are saved in the messages property...
       //...
    }//$scope = obj that lives in controller that we have access to in template.

    angular
        .module('blocChatEe')
        .controller('HomeCtrl', ['Room', 'Message', '$scope', HomeCtrl]);
        //injecting $uibModal into array will break layout
})();
