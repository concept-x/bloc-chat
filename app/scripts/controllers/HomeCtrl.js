(function() {//interface between view (home.html) and service (Room.js)
    function HomeCtrl(Room) {
      this.rooms = Room.all;
      this.greeting = "Bloc Chat Home Page!!!";
      //everything made in this controller must be inside this function, or else no accessibility
    }

    angular
        .module('blocChatEe')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
        //inject UI Bootstrap into dep. array...how?? And what do we call it?
})();

//Create 'room' argument passed into rooms.add method (in Room.js) here. How??
