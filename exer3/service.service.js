module.service("serviceService", function(apiService, globalConst) {
    
    const result = []
    this.getBto1 = function(b) { 
        for (i=b;i>=b;i--){
            result[i]=i;
        }
        return result;
    }
})