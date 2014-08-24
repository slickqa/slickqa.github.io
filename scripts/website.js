angular.module('SlickWebsite', ['ngAnimate', 'ngCookies'])
    .controller('MainController', function($scope, $cookieStore) {
        var show = false;

        $scope.toggleNav = function($event) {
            show = !show;
            $event.preventDefault();
        };

        $scope.navShow = function() {
            return show || $scope.navMode() == "pinned";
        };

        $scope.toggleMode = function($event) {
            if($scope.navMode() == "overlay") {
                $cookieStore.put("nav-mode", 'pinned');
            } else {
                $cookieStore.put("nav-mode", 'overlay');
            }
            $event.preventDefault();
        };

        $scope.navMode = function() {
            if($cookieStore.get('nav-mode') == "pinned") {
                return "pinned";
            } else {
                return "overlay";
            }
        };

        $scope.navModeClass = function() {
            return "sidenav-" + $scope.navMode();
        };
    });
