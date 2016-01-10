/**
 * Created by .klr on 20/02/2015.
 */

(function(){
    'use strict';

    var app = angular.module('usineapp', ['ngRoute','routeAppControllers']);

    app.controller('UsineController', ['$http', function($http) {
        var usine = this;
        usine.claire = [];
        $http.get('usine-data.json').success(function(data){
            usine.claire = data;
        });
    }]);

    app.controller('rteController', ['$scope','$timeout', function($scope, $timeout) {
        $scope.$on("$routeChangeSuccess", function shadowbox() {
                $timeout(function(){
                    Shadowbox.init({
                        skipSetup: true
                    });
                    Shadowbox.setup();
                    //console.log("init");
                },1000);
            }
        );
    }]);

    app.controller('seoCtrl', ['$scope', function ($scope) {
        $scope.$on('$routeChangeSuccess', function (event, data) {
            $scope.pageTitle = data.title;
            $scope.pageDesc = data.desc;
        });
    }]);


    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'tpl/home.html',
                controller: 'HomeController',
                title:'Claire Sassella : Webdesign, graphisme et origami',
                desc:'Usine creative : Portfolio Claire Sassella, webdesigner lyon (69).'
            }).
            when('/graphisme-webdesign', {
                templateUrl: 'tpl/design.html',
                controller: 'DesignController',
                title:'Webdesign, graphisme lyon',
                desc:'Usine creative : Claire Sassella, webdesigner, intégrateur, lyon (69).'
            }).
            when('/origami-lyon', {
                templateUrl: 'tpl/origami.html',
                controller: 'OrigamiController',
                title:'Origami Lyon, apprendre origami',
                desc:'Usine creative : Paper art, portfolio origami.'
            }).
            when('/contact', {
                templateUrl: 'tpl/contact.html',
                controller: 'ContactController',
                redirectTo:  "/contact",
                title:'Contact webdesigner, graphiste lyon',
                desc:'Usine creative : Contatez moi.'
            }).
            otherwise({
                redirectTo: '/'
            });
            $locationProvider.html5Mode(true);
    });



})();


