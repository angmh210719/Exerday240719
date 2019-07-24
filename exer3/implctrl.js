
module.controller("implCtrl", ImplCtrl)

// DI dependency injection - IOC

function ImplCtrl($scope, $rootScope, globalConst, dataService, apiService) {

    //$scope.num =new num(0,0);
    //dataService.ab= $scope.num;
    $scope.ds = dataService

}
///class num {
 //   constructor(a, b) {
  //      this.a = a;
  //      this.b = b;
  //  }
//}

