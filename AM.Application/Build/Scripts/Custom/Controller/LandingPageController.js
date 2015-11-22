

function LandingPageController($scope, $mdSidenav) {

    'use strict';

    $scope.landingPageModel = {
        title: 'CI/FS Reporting Dashboard',
        projectTitle: 'CI Reporting',
        rightLogoBosch: '/Images/bosch_logo.png',
        leftLogoBosch: '/Images/CIR_Logo.png',
        helloUser: 'Hello, ' + 'Tri Nguyen Minh',
        footerCopyRight: '© 2015 - Robert Bosch Engineering and Business Solutions, Vietnam',
        leftMenu: { isLocked: true, isOpen: true }
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

    $scope.leftSidebarToggle = function () {
        $scope.landingPageModel.leftMenu.isLocked = !$scope.landingPageModel.leftMenu.isLocked;
        if (!$scope.landingPageModel.leftMenu.isLocked) {
            $mdSidenav('left').close();
        } else {
            $mdSidenav('left').open();
        }
    };

}
LandingPageController.$inject = ['$scope', '$mdSidenav'];
angular.module('GlobalModule').controller('LandingPageController', LandingPageController);

