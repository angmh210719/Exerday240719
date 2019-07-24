
module.controller("sumctrl", Sumctrl)

// DI dependency injection - IOC

function Sumctrl($scope, $rootScope, globalConst, dataService, serviceService) {
    //$scope.result =dataService.ab.a+dataService.ab.b
    $scope.ds = dataService
}
