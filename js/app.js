
console.log(Vue);

const app = Vue.createApp({
    // batics comilla inclinada hacia la derecha :v
    //tengo todo el poder sobre la app
    //programacion declarativa -> aqui va el codigo js 
    //dentro de las dos llaves vamos a poner codigo js 
    template: `
    <h1>Hola Mundo desde Vue.js</h1>
    <p>{{1+1}}</p>
    <p>{{[1,2,3,4,5,6,7,8,9]}}</p>
    <p>{{1<2?'Verdadero':'Falso'}}</p>
    
    ` 
});

app.mount('#myApp'); //configuro a la app XD

