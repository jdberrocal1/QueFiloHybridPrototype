/**
 * Created by j-dan on 7/2/2016.
 */
(function () {
  var controllerId = 'restController';
  angular.module('QueFilo').controller(controllerId, [
    '$scope',
    'RestService',
    '$stateParams',
    function (
      $scope,
      RestService,
      $stateParams
    ) {
      var vm = this;
      var restId = parseInt($stateParams.id);
      vm.rest = [
      ];

      function getRestaurantById(id){
        vm.rest=RestService.getRestaurantById(id);
        vm.rest.isInfoShow=true;
        if(vm.rest.isOpen){
          vm.rest.isOpenMsg="Abierto en este momento";
        }else{
          vm.rest.isOpenMsg="Cerrado en este momento"
        }
      }




      getRestaurantById(restId);
    }
  ]);
})();
