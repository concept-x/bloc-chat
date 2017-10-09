(function() {//interface between view (home.html) and service (Room.js)
    function HomeCtrl(Room) {
      this.rooms = Room.all;
      this.greeting = "Bloc Chat Home Page!!!";
    }

    angular
        .module('blocChatEe')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
