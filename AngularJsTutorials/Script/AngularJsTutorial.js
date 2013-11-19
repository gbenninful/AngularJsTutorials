var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(function ($routeProvider) {
    $routeProvider
    .when('/view1',
        {
            controller: 'SimpleController',
            templateUrl: 'Views/View1.html'
        })
    .when('/view2',
    {
        controller: 'SimpleController',
        templateUrl: 'Views/View2.html'
    })
    .otherwise({ redirectTo: '/view1' });
})
.controller('SimpleController', function ($scope) {
    $scope.customers = [
        { name: 'John Doe', city: 'New York' },
        { name: 'John Smith', city: 'Phoenix' },
        { name: 'Jane Doe', city: 'San Francisco' }
    ];

    $scope.addCustomer = function () {
        $scope.customers.push(
            {
                name: $scope.newCustomer.name,
                city: $scope.newCustomer.city
            });
    };
});

