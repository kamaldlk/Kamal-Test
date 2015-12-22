angular.module('mitosisPoc.providers').provider('api', function ApiProvider() {

    var _apiUrl = null;
    this.setApiUrl = function (url) {
        _apiUrl = url;

    };

    var _apiHeaders = {};
    this.setApiHeaders = function (headers) {
        _apiHeaders = headers;
    };

    var http = null;
    var httpRequest = function (method, path, data, callback) {
        if (http == null) callback({
            error: true,
            errorCode: "HTTP_NULL"
        }, null);

        _apiHeaders['Content-Type'] = 'application/json';
        http({
                method: method,
                url: _apiUrl + path,
                headers: _apiHeaders,
                data: data
            })
            .success(function (data, status, headers, config) {
                if (data.error) {
                    callback(data, null);
                } else {
                    callback(null, data);
                }
            })
            .error(function (data, status, headers, config) {
                callback({
                    error: true,
                    errorCode: "UNKNOWN_ERROR"
                }, null);
            });
    };



    this.$get = ['$injector', '$http',  function ($injector, $http){
                 
                 
    	 
        http = $http;

        var apiClass = {};
        
        apiClass.User = function(){
        	 this.name= "";
        };
        apiClass.User.search = function (user, callback) {
            httpRequest("POST", "usersearch/search", user, function (err, data) {
                if (err) {

                    callback(err, null);

                } else {

                    callback(null, data);

                }
            });
        };

        return apiClass;
     }];

});
