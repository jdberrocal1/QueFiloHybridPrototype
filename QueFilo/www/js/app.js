(function () {
  'use strict';
    var app = angular.module('QueFilo', [
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
        templateUrl: 'js/tabs/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.rests', {
        url: '/rests',
        views: {
          'tab-rests': {
            templateUrl: 'js/restaurants/restList.html',
            controller: 'restListController',
            controllerAs:'rest'
          }
        }
      })
      .state('tab.rest', {
        url: '/rests/rest/:id',
        views: {
          'tab-rests': {
            templateUrl: 'js/restaurants/rest.html',
            controller: 'restController',
            controllerAs:'rest'
          }
        }
      })
      .state('tab.orders', {
        url: '/orders',
        views: {
          'tab-orders': {
            templateUrl: 'js/orders/orderList.html',
            controller: 'orderListController',
            controllerAs:'order'
          }
        }
      })
      .state('tab.profile', {
        url: '/profile',
        views: {
          'tab-profile': {
            templateUrl: 'js/profile/profile.html',
            controller: 'profileController',
            controllerAs:'profile'
          }
        }
      })



      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/tab/rests');

    });
})();
