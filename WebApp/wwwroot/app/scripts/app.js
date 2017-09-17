var app = angular.module('zoomhdapp', ['ui.router'])

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
        // COMMON VIEW
        .state('root', {
            url: '',
            abstract: true,
            controller: 'MainCtrl',
            //templateUrl: 'index.html'
        })

        // USER APP VIEWS
        .state('root.layout', {
            url: '',
            abstract: true,
            templateUrl: 'app/views/layout/layout.html',
            css: 'app/content/css/style.css',
            //controller: 'MainController',
            //controllerAs: 'main'
        })
        .state('root.layout.home', {
            url: '/home',
            templateUrl: 'app/views/home/home.html',
            css: 'app/content/css/style.css',
            //controller: 'MainController',
            //controllerAs: 'main'
        })
        .state('root.layout.contacto', {
            url: '/contacto',
            templateUrl: 'app/views/home/contacto.html',
            css: 'app/content/css/style.css',
            //controller: 'CandidateProfileController',
            //controllerAs: 'profile'
        })

        .state('root.layout.catalogo', {
            url: '/catalogo',
            templateUrl: "app/views/producto/catalogo.html",
            css: 'app/content/css/style.css',
            //controller: 'mainController'
        })

        .state('root.layout.carrito', {
            url: '/carrito',
            templateUrl: "app/views/producto/carrito.html",
            css: 'app/content/css/style.css',
            //controller: 'mainController'
        })

        .state('root.layout.aboutus', {
            url: '/aboutus',
            templateUrl: "app/views/home/aboutus.html",
            css: 'app/content/css/style.css',
            //controller: 'mainController'
        })

        .state('root.layout.faq', {
            url: '/faq',
            templateUrl: "app/views/home/faq.html",
            css: 'app/content/css/style.css',
            //controller: 'mainController'
        })

        //ADMIN LAYOUT VIEWS
        .state('root.admin', {
            url: '',
            abstract: true,
            templateUrl: 'app/views/admin/index.html',
            css: 'app/content/css/main.css',
        })
        .state('root.admin.home', {
            url: '/admin',
            css: 'app/content/css/main.css',
            templateUrl: 'app/views/admin/home.html',
        })
    $urlRouterProvider.otherwise('/home');
}]);

app.controller('MainCtrl', function ($scope, $rootScope, $state, $stateParams) {
    $scope.$watch(function () { return $state.current.css; }, function (value) {
        $scope.css = value;
    });
});


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