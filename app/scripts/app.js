(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

/*
        $stateProvider
              .state('modal', {
                url: '/',
                controller: 'ModalCtrl as modal',
                templateUrl: '/templates/modal.html'
              })
  */
  //adding above made modal.html show up, replacing home.html; still no modal window
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })

          
    }

     angular
         .module('blocChatEe', ['ui.router', 'ui.bootstrap', 'firebase'])
         .config(config);
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
