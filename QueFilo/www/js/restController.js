(function () {
  var controllerId = 'restController';
  angular.module('starter').controller(controllerId, [
    '$scope',
    'RestService',
    function (
      $scope,
      RestService
    ) {
      var vm = this;
      vm.restaurants = [
      ];

      function getRestaurants(){
        vm.restaurants=RestService.getRestaurants();
      }

      getRestaurants()
    }
  ]);
})();
