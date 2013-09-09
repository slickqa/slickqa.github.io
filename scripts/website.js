angular.module('SlickWebsite', ['ngAnimate', 'ngCookies'])
    .controller('MainController', function($scope, $cookieStore) {
        var show = false;

        $scope.toggleNav = function($event) {
            show = !show;
            $event.preventDefault();
        };

        $scope.navShow = function() {
            return show;
        };

        $scope.toggleMode = function() {
            if($scope.navMode() == "overlay") {
                cookieStore.put("nav-mode", 'pinned');
            } else {
                cookieStore.put("nav-mode", 'overlay');
            }
        };

        $scope.navMode = function() {
            if($cookieStore.get('nav-mode') == "pinned") {
                return "pinned";
            } else {
                return "overlay";
            }
        }
    });