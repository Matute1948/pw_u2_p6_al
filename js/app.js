
console.log(Vue);

const estu = [{nombre: "Kriss",apellido:"Leon"},
{nombre: "martin",apellido:"Nopal"},
{nombre: "Augusto",apellido:"Lema"},
{nombre: "Titan",apellido:"Flores"},
{nombre: "Santy",apellido:"Peña"}

];

//options npa - no se si escribe asi :V
const app = Vue.createApp({
    // batics comilla inclinada hacia la derecha :v
    //tengo todo el poder sobre la app
    //programacion declarativa -> aqui va el codigo js 
    //dentro de las dos llaves vamos a poner codigo js 
    //template: `
    //<h1>Hola Mundo desde Vue.js</h1>
    //<p>{{1+1}}</p>
    //<p>{{[1,2,3,4,5,6,7,8,9]}}</p>
    //<p>{{1<2?'Verdadero':'Falso'}}</p>
    //`
    //declaracion de prop reactivas
    data(){
        return{
            mensaje: "Hola mundo propiedad reactiva",
            valor: 7,
            lista: estu
           
        }
    },
    methods:{
        cambiarTexto(){
            this.mensaje = "Texto cambiado";
        },
        sumar(){
            this.valor = this.valor + 10;
        },
        agregar(){
            const aux = {
                nombre:"Andres",
                apellido:"Lugmaña"
            };
            this.lista.unshift(aux);
        }
    } 
});

app.mount('#myApp'); //configuro a la app XD

