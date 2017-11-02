(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

  //adding above made modal.html show up, replacing home.html; still no modal window
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
    }
/*
    function BlocChatCookies($cookies) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
          // Do something to allow users to set their username
        }
      }//pulled from first code example in bc cp5
      //use modalctrl.js to look for guidance in inserting fn execution above; see lines 23-34 of modalctrl.js.
*/
     angular
         .module('blocChatEe', ['ui.router', 'ui.bootstrap', 'firebase'])
         .config(config)
         .run(['$cookies', BlocChatCookies]);
 })();//adding dbl parentheses here didn't make a difference w/functionality


//above: my file; below: found on interwebs
/*
var app = angular.module("MyApp", ["ui.bootstrap.modal"]);

app.controller("MyCtrl", function($scope) {

  $scope.open = function() {
    $scope.showModal = true;
  };

  $scope.ok = function() {
    $scope.showModal = false;
  };

  $scope.cancel = function() {
    $scope.showModal = false;
  };

});
*/
