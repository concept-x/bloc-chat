(function() {//interface between view (home.html) and service (Room.js)
    function HomeCtrl(Room) {
      this.rooms = Room.all;
      this.greeting = "Bloc Chat Home Page!!!";
      //everything made in this controller must be inside this function, or else no accessibility
    }

    angular
        .module('blocChatEe')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
        //injecting $uibModal into array will break layout
})();

//Create 'room' argument passed into rooms.add method (in Room.js) here. How??
