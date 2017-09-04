var app = angular.module('zoomhdapp', ['ui.router'])

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        //Layout
        .state('app', {
            //abstract: true,
            templateUrl: '/index.html',
        })

        //.state('app.main', {
        .state('main', {
            url: '/', 
            templateUrl: "app/views/home/home.html",
            //controller: 'mainController'
        })

        .state('contacto', {
            url: '/contacto',
            templateUrl: "app/views/home/contacto.html",
            //controller: 'mainController'
        })

        .state('catalogo', {
            url: '/catalogo',
            templateUrl: "app/views/producto/catalogo.html",
            //controller: 'mainController'
        })

        .state('carrito', {
            url: '/carrito',
            templateUrl: "app/views/producto/carrito.html",
            //controller: 'mainController'
        })

        .state('aboutus', {
            url: '/aboutus',
            templateUrl: "app/views/home/aboutus.html",
            //controller: 'mainController'
        })

        .state('faq', {
            url: '/faq',
            templateUrl: "app/views/home/faq.html",
            //controller: 'mainController'
        })

}]);


//app.run(['$rootScope', '$location', '$cookieStore', '$http', '$window',
//    function ($rootScope, $location, $cookieStore, $http, $window) {
//        // keep user logged in after page refresh
//        $rootScope.usuario = $cookieStore.get('usuario') || {};

//        if ($rootScope.usuario) {
//            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.usuario.authdata; // jshint ignore:line
//        }

//        $rootScope.$on('$locationChangeStart', function (event, next, current) {
//            // redirect to login page if not logged in
//            if ($location.path() !== '/usuariologin' && !$rootScope.usuario.email) {
//                if ($location.path() !== '/usuariocrear') {
//                    if ($location.path() !== '/home') {
//                        $location.path('usuariologin');
//                    }
//                }
//            }
//            if (($location.path() == '/usuariologin' || $location.path() == '/usuariocrear') && $rootScope.usuario.email) {
//                $location.path('usuariotodos');
//            }
//        });
//    }]);