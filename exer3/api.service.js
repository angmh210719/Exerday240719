module.factory("apiService", function(globalConst,dataService) {
    const result = {};
    result.get1toA = function (a) {
        for (i=1;i<=a;i++){
            result[i]=i;
        }
        return result
    }

   return result
})