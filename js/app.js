'use strict';

var mitosisPoc = angular.module('mitosisPoc', ['toastr', 'ui.router', 'mitosisPoc.controllers', 'mitosisPoc.factories', 'mitosisPoc.directives', 'ngMaterial', 'mitosisPoc.providers', 'mitosisPoc.services', 'mitosisPoc.filters'])
    .run(['$rootScope', '$state', '$stateParams', '$location', '$window', function ($rootScope, $state, $stateParams, $location, $window) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
}]);

angular.module('mitosisPoc.providers', ['ngMaterial']);

angular.module('mitosisPoc.controllers', ['ngMaterial']);

angular.module('mitosisPoc.factories', ['ngMaterial']);

angular.module('mitosisPoc.directives', ['ngMaterial']);

angular.module('mitosisPoc.services', ['ngMaterial']);

angular.module('mitosisPoc.filters', []);
