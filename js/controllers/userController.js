'use strict';
angular.module('mitosisPoc.controllers')

.controller('UserController', ['$scope', '$http', '$state', 'api', '$rootScope', '$mdToast', 'toastr', function ($scope, $http, $state, api, $rootScope, $mdToast, toastr) {

	 
    $scope.userSearch = function () {

        api.User.search($scope.user, function (err, data) {
        	
            try {
                if (err) {

                    toastr.error("Failed to Fetching Data" + err.errorCode);

                } else {

                	 $scope.user = data;
                	 toastr.success("Got it" +  $scope.user.name);

                }
            } catch (e) {
                console.log(e);
            }
        });
    };


    $scope.animationStart = function () {

        var element = document.getElementsByTagName("md-input-container");
        TweenMax.staggerFromTo(element, 0.3, {
            right: "-1000px"
        }, {
            right: "0px",
            ease: Quart.easeInOut
        }, 0.1);
    }

  }]);
