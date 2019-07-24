module.controller("oneToACtrl", OneToACtrl)

// DI dependency injection - IOC

function OneToACtrl($scope, $rootScope, globalConst, dataService,apiService) {
    $scope.ds = dataService;
  //  $scope.res =apiService.get1toA( $scope.ds.a); 
}