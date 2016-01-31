(function () {
  var serviceId = 'RestService';
  angular.module('starter').service(serviceId, [
    function (
    ) {
      var restaurants=[
        {
          name:"Charlies Burgues",
          tel:"2460-2454",
          addres:"Costado norte del parque ciudad Quesada San Carlos",
          description:"Preparamos las hamburguesas mas exquisitas del país, comidas rápidas y platos típicos. Todos nuestros platillos son preparados con materia prima de primera calidad.",
          schedule:"Lunes-Viernes: 10:00 AM-10:00 PM Sábado-Domingo: 9:00 AM-10:00 PM ",
          type:"Varios"
        },
        {
          name:"Gran Parrillada",
          tel:"4701-1818",
          addres:"100mts norte del Hospital San Carlos",
          description:"",
          schedule:" Lunes-Domingo: 10:30 AM-10:00 PM",
          type:"Varios"
        },
        {
          name:"Kbtos",
          tel:"2460-2778",
          addres:"50 mts oeste de la Estacion de Bomberos de Ciudad Quesada",
          description:"",
          schedule:"Lunes-Viernes: 8:00 AM-10:00 PM Sábado: 12:00 AM-10:00 PM Domingo: 2:00 PM-09:00 PM ",
          type:"Varios"
        },
        {
          name:"Kenko Sushi",
          tel:"2460-8784",
          addres:"Frente a gasolinera delta en Ciudad Quesada",
          description:"Especializados en comida Japonesa",
          schedule:"Lunes-Domingo: 11:30 AM-10:00 PM",
          type:"Oriental"
        },
        {
          name:"La Forchetta",
          tel:"2461-1414",
          addres:"100 mts sur del Liceo San Carlos. Centro Comercial Boreal. Ciudad Quesada",
          description:"Restauran italiano y pizza a la leña",
          schedule:"Martes-Viernes: 6:00 PM-9:00 PM Sábado: 12:00 PM-9:00 PM Domingo: 12:00 PM-8:00 PM ",
          type:"Italiana"
        },
        {
          name:"New York Pizza",
          tel:"2461-1112",
          addres:"Barrio San Antonio, costado sur de la Casa del Vidrio.",
          description:"Un negocio familiar ubicado en barrio San Antonio, Ciudad Quesada especializado en pizzas, pastas y cocina italiana al estilo New York.",
          schedule:"Lunes-Jueves: 11:00 AM-10:00 PM Viernes-Sábado: 11:00 AM-11:00 PM Domingo: 11:00 AM-10:00 PM ",
          type:"Italiana"
        }
      ];

      this.getRestaurants=function getRestaurants(){
        return restaurants;
      }

    }
  ]);
})();
