

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
          title: 'Trash',
          icon: 'delete'
      },
      {
          link: '',
          title: 'Settings',
          icon: 'settings'
      }
    ];
}
LandingPageController.$inject = ['$scope'];
angular.module('GlobalModule').controller('LandingPageController', LandingPageController);

