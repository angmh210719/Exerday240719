module.controller("bToOneCtrl", BToOneCtrl)

// DI dependency injection - IOC

function BToOneCtrl($scope, $rootScope, globalConst, dataService, serviceService) {
    $scope.ds = dataService
}