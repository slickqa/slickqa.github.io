angular.module('SlickWebsite', ['ngAnimate', 'ngCookies'])
    .controller('MainController', function($scope, $cookieStore) {
        var show = true;

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
            if($cookieStore.get('nav-mode') == "overlay") {
                return "overlay";
            } else {
                return "pinned";
            }
        };

        $scope.navModeClass = function() {
            return "sidenav-" + $scope.navMode();
        };
    });
