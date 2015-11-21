

function LandingPageController($scope) {

    'use strict';

    $scope.landingPageModel = {
        title: 'CI/FS Reporting Dashboard',
        projectTitle: 'CI Reporting',
        rightLogoBosch: '/Images/bosch_logo.png',
        leftLogoBosch: '/Images/CIR_Logo.png',
        helloUser: 'Hello, ' + 'Tri Nguyen Minh',
        footerCopyRight: '© 2015 - Robert Bosch Engineering and Business Solutions, Vietnam'
    };

    $scope.menu = [{
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
    }];

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

