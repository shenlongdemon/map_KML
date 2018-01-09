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
            $scope.georssLayer = new google.maps.KmlLayer(
                 'https://developers.google.com/kml/documentation/Point-load.kml' //?ver=' + Date.now()  
                ,
                  {
                      suppressInfoWindows: true,
                      map: $scope.map,
                      preserveViewport: true
                  }
              );
              $scope.georssLayer.setMap($scope.map);
              $scope.georssLayer.addListener('click', function(kmlEvent) {
                alert("");
            });
        }
    }

})();