(function () {
  var serviceId = 'RestService';
  angular.module('QueFilo').service(serviceId, [
    function (
    ) {
      var restaurants=[
        {
          id:9,
          name:"Charlie's Burguer",
          tel:"2460-2454",
          address:"Costado norte del parque ciudad Quesada San Carlos",
          description:"Preparamos las hamburguesas mas exquisitas del país, comidas rápidas y platos típicos. Todos nuestros platillos son preparados con materia prima de primera calidad.",
          schedule:"Lunes-Viernes: 10:00 AM-10:00 PM Sábado-Domingo: 9:00 AM-10:00 PM ",
          type:"Varios",
          img:"img/9.jpg",
          isOpen:true,
          menu:[
            {
              name:"Hamburguesas",
              products:[
                {
                  name:"Hamburguesa Regular",
                  price:1325,
                  description:"Torta regular, lechuga y salsas"
                },
                {
                  name:"Quesoburguesa con Jamón",
                  price:1750,
                  description:"Torta regular, queso, jamón y salsas"
                },
                {
                  name:"Quesoburguesa Doble",
                  price:2100,
                  description:"2 Tortas regulares, queso y salsas"
                },
                {
                  name:"Quesoburguesa",
                  price:1425,
                  description:"Torta regular, queso y salsas"
                },
                {
                  name:"Quesoburguesa Delux",
                  price:2100,
                  description:"Torta regular, tocineta, queso, tomate, lechuga, cebolla y salsas."
                },
                {
                  name:"Retoburguesa",
                  price:4125,
                  description:"Torta de 1/4 de libra con queso amarillo, aguacate, aros de cebolla, salsa chipotle, tocineta, lechuga, tomate, salsa BBQ y pepinillos, todo entre pan de hamburguesa. Te retamos a pedirla."
                }
              ]
            },
            {
              name:"Sandwich",
              products:[
                {
                  name:"Jamon y Queso",
                  price:2650,
                  description:""
                },
                {
                  name:"Carne",
                  price:2700,
                  description:""
                },
                {
                  name:"Súper Especial",
                  price:3975,
                  description:"Jamón, queso, carne, pollo y frijoles."
                }
              ]
            },
            {
              name:"Combos Charlie's",
              products:[
                {
                  name:"Retocombo",
                  price:5275,
                  description:"Retoburguesa, papas fritas y refresco mediano."
                },
                {
                  name:"Combo 2 Quesoburguesas",
                  price:4300,
                  description:"Dos hamburguesas con queso, papas fritas y refresco mediano."
                }
              ]
            },
            {name:"Especiales"},
            {name:"Combos Especiales"},
            {name:"Papitas y mas"},
            {name:"Pizza"},
            {name:"Tipico"},
            {name:"Desayunos"},
            {name:"Menu Liviano"},
            {name:"Postres"},
            {name:"Batidos"},
            {name:"Bebidas Naturales"},
            {name:"Gaseosas"},
            {name:"Bebidas Calientes"}
          ]
        },
        {
          id:16,
          name:"Gran Parrillada",
          tel:"4701-1818",
          address:"100mts norte del Hospital San Carlos",
          description:"",
          schedule:" Lunes-Domingo: 10:30 AM-10:00 PM",
          type:"Varios",
          img:"img/16.jpg",
          isOpen:true
        },
        {
          id:12,
          name:"Kbtos",
          tel:"2460-2778",
          address:"50 mts oeste de la Estacion de Bomberos de Ciudad Quesada",
          description:"",
          schedule:"Lunes-Viernes: 8:00 AM-10:00 PM Sábado: 12:00 AM-10:00 PM Domingo: 2:00 PM-09:00 PM ",
          type:"Varios",
          img:"img/12.png",
          isOpen:false
        },
        {
          id:2,
          name:"Kenko Sushi",
          tel:"2460-8784",
          address:"Frente a gasolinera delta en Ciudad Quesada",
          description:"Especializados en comida Japonesa",
          schedule:"Lunes-Domingo: 11:30 AM-10:00 PM",
          type:"Oriental",
          img:"img/2.jpg",
          isOpen:true
        },
        {
          id:14,
          name:"La Forchetta",
          tel:"2461-1414",
          address:"100 mts sur del Liceo San Carlos. Centro Comercial Boreal. Ciudad Quesada",
          description:"Restauran italiano y pizza a la leña",
          schedule:"Martes-Viernes: 6:00 PM-9:00 PM Sábado: 12:00 PM-9:00 PM Domingo: 12:00 PM-8:00 PM ",
          type:"Italiana",
          img:"img/14.jpg",
          isOpen:false
        },
        {
          id:7,
          name:"New York Pizza",
          tel:"2461-1112",
          address:"Barrio San Antonio, costado sur de la Casa del Vidrio.",
          description:"Un negocio familiar ubicado en barrio San Antonio, Ciudad Quesada especializado en pizzas, pastas y cocina italiana al estilo New York.",
          schedule:"Lunes-Jueves: 11:00 AM-10:00 PM Viernes-Sábado: 11:00 AM-11:00 PM Domingo: 11:00 AM-10:00 PM ",
          type:"Italiana",
          img:"img/7.jpg",
          isOpen:true
        }
      ];

      this.getRestaurants=function getRestaurants(){
        return restaurants;
      }

      this.getRestaurantById= function getRestaurantById(id){
        var result={};
        for(var i = 0; i<restaurants.length;i++){
          var rest = restaurants[i];
          if(rest.id === id){
            result=rest;
            break;
          }
        }
        return result;
      }

    }
  ]);
})();
