

function LandingPageController($scope) {

    'use strict';

    $scope.landingPageModel = {
        title: 'Angular Material Layout'
    };


    $scope.menu = [
    {
        link: '',
        title: 'Dashboard',
        icon: 'dashboard'
    },
    {
        link: '',
        title: 'Friends',
        icon: 'group'
    },
    {
        link: '',
        title: 'Messages',
        icon: 'message'
    }
    ];
    $scope.admin = [
      {
          link: '',
          title: 'Roles',
          icon: 'delete'
      },
      {
          link: '',
          title: 'Users',
          icon: 'settings'
      }
    ];
}
LandingPageController.$inject = ['$scope'];
angular.module('GlobalModule').controller('LandingPageController', LandingPageController);

