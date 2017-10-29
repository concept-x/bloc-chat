(function() {//interface between view (home.html) and service (Room.js)
    function HomeCtrl(Room, $scope) {
      this.rooms = Room.all;
      $scope.greeting = "Bloc Chat Home Page!!!";
      //everything made in this controller must be inside this function, or else no accessibility
      $scope.activeRoom = "This is the active room.";//Active room header. Works, yay!!
    }//$scope = obj that lives in controller that we have access to in template.

    angular
        .module('blocChatEe')
        .controller('HomeCtrl', ['Room', '$scope', HomeCtrl]);
        //injecting $uibModal into array will break layout
})();

//Create 'room' argument passed into rooms.add method (in Room.js) here. How??
