(function(){

    var routeAppControllers = angular.module('routeAppControllers', []);

    routeAppControllers.controller('HomeController', function() {});
    routeAppControllers.controller('DesignController', function() {});
    routeAppControllers.controller('OrigamiController', function() {});
    routeAppControllers.controller('ContactController', function($scope, $http) {
        $scope.success = false;
        $scope.error = false;
        $scope.sendMail = function(event){
            event.preventDefault();
            $http({
                method: "POST",
                url: 'mail.php',
                data : $scope.input,
                header:{'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .success(function(data){
                    if(data.success){
                        $scope.success = true;
                    }else{
                        $scope.error = true;
                    }
                });
        }
    });

})();

 /*Foundation*/
$(document).foundation({
    offcanvas : {
        // Sets method in which offcanvas opens.
        // [ move | overlap_single | overlap ]
        open_method: 'overlap',
        // Should the menu close when a menu link is clicked?
        // [ true | false ]
        close_on_click : true
    }
});

