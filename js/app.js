angular.module('MyApp', [], function($routeProvider, $locationProvider) {

  $routeProvider.
      when('/', { templateUrl: 'home.html'}).
      when('/ejemplo', { templateUrl: 'ejemplos.html'}).
      otherwise({redirectTo: '/'});

});
  



function ApplicationController($scope) {
  $scope.programas = [
        {id: 0, name: 'hola mundo con eco', codigo: 'print("Hola mundo !" * 10)'},
        {id: 1, name: 'pilas basico', codigo: 'a = pilas.actores.Aceituna()' + '\n' +
                                              'a.x = 250' + '\n' +
                                              'a.y = 140' + '\n' +
                                              'a.rotacion = 65' + '\n' +
                                              '' + '\n' +
                                              'def crear_otro_actor(x, y):' + '\n' +
                                              '  coop = pilas.actores.Cooperativista()' + '\n' +
                                              '  coop.x = x' + '\n' +
                                              '  coop.y = y' + '\n' +
                                              '' + '\n' +
                                              'crear_otro_actor(200, 120)' + '\n' +
                                              '' + '\n' +
                                              '# Para ver en la terminal ...' + '\n' +
                                              'print("¿hola?, ¿terminal de texto?, ¿estas ahí?")' + '\n' +
                                              'print("Eco " * 10)' + '\n' 
        },
      ];

  $scope.crear_programa = function() {
    var nombre = prompt("Escribe el nombre de tu programa", "mi programa.py");

    if (nombre) {
      var nuevo_id = $scope.programas.length;
      $scope.programas.push({id: nuevo_id, name: nombre, codigo: ''});
      $scope.abrir_programa(nuevo_id);
    }
  };

  function obtener_codigo_por_id(id) {
    for (var i=0; i<$scope.programas.length; i++) {
      if ($scope.programas[i].id === id)
        return $scope.programas[i].codigo;
    }
  }

  $scope.abrir_programa = function(id_programa) {
    editor.getSession().setValue(obtener_codigo_por_id(id_programa));
  }

}
