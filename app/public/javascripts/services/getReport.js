'use strict';

var reviewApp = angular.module('app');

reviewApp.service('GetReport', ['$http', function ($http) {
  this.get = function (filterType) {
    return $http.get('http://localhost:3000/report?filter=' + filterType);
  }
}]);