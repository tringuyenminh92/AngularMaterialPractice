

function LandingPageController($scope) {
    $scope.landingPageModel = {
        title: 'Angular Material Layout'
    };
}
LandingPageController.$inject = ['$scope'];
angular.module('GlobalModule').controller('LandingPageController', LandingPageController);

