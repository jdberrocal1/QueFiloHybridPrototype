(function () {
  var controllerId = 'restListController';
  angular.module('QueFilo').controller(controllerId, [
    '$scope',
    'RestService',
    '$location',
    function (
      $scope,
      RestService,
      $location
    ) {
      var vm = this;
      vm.restaurants = {};

      function getRestaurants(){
        vm.restaurants=RestService.getRestaurants();
      }

      vm.goToRestaurant= function goToRestaurant(id){
        $location.path("tab/rests/rest/"+id);
      }

      getRestaurants()
    }
  ]);
})();
