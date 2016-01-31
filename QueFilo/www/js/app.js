(function () {
  'use strict';
    var app = angular.module('starter', [
      'ionic',
      'ngCordova'
    ]);

    app.run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })

    app.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
      // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.rest', {
        url: '/rest',
        views: {
          'tab-rest': {
            templateUrl: 'templates/tab-rest.html',
            controller: 'restController',
            controllerAs:'rest'
          }
        }
      })

      .state('tab.orders', {
          url: '/orders',
          views: {
            'tab-orders': {
              templateUrl: 'templates/tab-orders.html',
              controller: 'ordersController',
              controllerAs:'orders'
            }
          }
        })

      .state('tab.profile', {
        url: '/profile',
        views: {
          'tab-profile': {
            templateUrl: 'templates/tab-profile.html',
            controller: 'profileController',
            controllerAs:'profile'
          }
        }
      });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/tab/rest');

    });
})();
