(function() {
    function Rooms($rootScope, Fixtures) {
         var Rooms = {}; //wtf goes here and inside?

         /*
         * @desc currentAlbum from Fixtures
         * @type {Object}???
         */
         var currentAlbum = Fixtures.getAlbum();
       }

       angular
           .module('blocChatEe')
           .factory('Rooms', ['$rootScope', 'Fixtures', SongPlayer]);//'factory' is a recipe...???
       })();
