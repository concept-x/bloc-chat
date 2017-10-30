(function() {//interface between view (home.html) and service (Room.js)
    function HomeCtrl(Room, Message, $scope) {
      this.rooms = Room.all;
      this.messages = Message.all;//????
      $scope.greeting = "Bloc Chat Home Page!!!";
      //everything made in this controller must be inside this function, or else no accessibility
      $scope.activeRoom = "This is the active room.";//Active room header. Works, yay!!
    
      //$scope.messages = Messages.all?? found online
    }//$scope = obj that lives in controller that we have access to in template.

    angular
        .module('blocChatEe')
        .controller('HomeCtrl', ['Room', 'Message', '$scope', HomeCtrl]);
        //injecting $uibModal into array will break layout
})();

//Create 'room' argument passed into rooms.add method (in Room.js) here. How??
