'use strict';

var angular = require('angular');

// modules
require('./modules/main/_index');
require('./modules/funcionalidade/_index');
require('./modules/kanban/_index');
require('./modules/modulo/_index');
require('./modules/home/_index');
require('./modules/login/_index');
require('./modules/usuario/_index');
require('./modules/email/_index');
require('./modules/acesso/_index');
require('./modules/projeto/_index');
require('./modules/burndown/_index');
require('./modules/equipe/_index');
require('./modules/tag/_index');

require('angular-route');
require('angular-animate');
require('angular-sanitize');
require('angular-scroll');
require('angular-messages');
require('angular-material');
require('ng-sortable');
require('angular-i18n/angular-locale_pt-br');
require('c3-angular/c3-angular');
require('ng-dialog/js/ngDialog.min');
require('ng-dialog/js/ngDialog.min');

var requires = [
    'agileTcc.Main',
    'agileTcc.Home',
    'agileTcc.Kanban',
    'agileTcc.Modulo',
    'agileTcc.Funcionalidade',
    'agileTcc.Login',
    'agileTcc.Usuario',
    'agileTcc.Email',
    'agileTcc.Acesso',
    'agileTcc.Projeto',
    'agileTcc.Burndown',
    'agileTcc.Equipe',
    'agileTcc.Tag',
    'ngRoute',
    'as.sortable',
    'ngSanitize',
    'ngMaterial',
    'ngAnimate',
    'ngDialog',
    'ngMessages',
    'gridshore.c3js.chart',
    'duScroll'
];

angular.module('agileTcc', requires);
angular.module('agileTcc').config(require('./system.config'));
angular.module('agileTcc').config(require('./system.token.interceptor.config'));
angular.module('agileTcc').run(require('./system.run'));
angular.module('agileTcc').run(require('./system.route.interceptor.run'));
angular.module('agileTcc').constant('SystemUriConfig', require('./system.constants'));
angular.module('agileTcc').constant('ApplicationSettings', require('./system.application.constants'));
angular.module('agileTcc').constant('layoutSize', require('./system.layoutSize'));