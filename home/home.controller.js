(function () {
    'use strict';
    angular
            .module('app')
            .controller('HomeController', HomeController);
    HomeController.$inject = ['$rootScope', '$scope'];
    function HomeController($rootScope, $scope) {      
        $rootScope.title = "shenlong-webutl";
        $scope.initMap = initMap;
        $scope.map = {};
        initController();
        function initController() {
            
        }
        function initMap(map){
            $scope.map = map;
            var georssLayer = new google.maps.KmlLayer({
                url: 'https://raw.githubusercontent.com/mapbox/Simple-KML/master/sample/example.kml?ver=' + Date.now()  
              });
            georssLayer.setMap($scope.map);
            georssLayer.addListener('click', function(kmlEvent) {
                alert("");
            });
        }
    }

})();