/*
var app = angular.module('demo',[]);

app.controller('StudentsController', function($scope){

    $scope.students = [
        {name: 'uno', lastName: 'Apl1'},
        {name: 'dos', lastName: 'Apl2'},
        {name: 'tres', lastName: 'Apl3'},
        {name: 'Cuatro', lastName: 'Otro APll'}
    ];
});

*/

function(){
    'use strict';
    angular.module('demo',[]).controller('StudentsController', StudentsController);

    /* para el minificador */
    StudentsController.$inject = ['$scope'];
    /**/


    function StudentsController($scope){
        $scope.students = [
            {name: 'uno', lastName: 'Apl1'},
            {name: 'dos', lastName: 'Apl2'},
            {name: 'tres', lastName: 'Apl3'},
            {name: 'Cuatro', lastName: 'Otro APll'}
            ];

    }


}();