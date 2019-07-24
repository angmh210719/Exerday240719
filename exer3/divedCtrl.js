module.controller("divedCtrl", DivedCtrl)

// DI dependency injection - IOC

function DivedCtrl($scope, $rootScope, globalConst, dataService, serviceService) {
    $scope.ds = dataService
    //$scope.result =dataService.ab.a/dataService.ab.b
}