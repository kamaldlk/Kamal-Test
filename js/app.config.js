angular.module('mitosisPoc')
    .config(['$stateProvider',
    '$urlRouterProvider',
          "apiProvider",

    function ($stateProvider, $urlRouterProvider, apiProvider)
        
    {

            $urlRouterProvider.otherwise('/search');

            $stateProvider
             
                .state('search', {
                    url: '/search',
                    templateUrl: 'views/search.html'
                });
                

           apiProvider.setApiUrl("http://192.168.1.41:8080/Poc/api/");
            
          
    }]);
