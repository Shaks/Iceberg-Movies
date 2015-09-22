(function() {

    var moviesApp = angular.module('moviesApp', [])

    .controller('MainCtrl', function($scope, dataService) {

        $scope.movies = {};
        var promise = dataService.getJson();
        promise.then(function (data) {
            $scope.movies = data.movies;
        });

    })

    .factory('dataService', function($http) {
        return {
            getJson: function() {
                return $http.get('data.json')
                    .then(
                        function(response) {
                            return response.data;
                        },
                        function(httpError) {
                            throw httpError.status + " : " + httpError.data;
                        });
            }

        };
    });

})();
