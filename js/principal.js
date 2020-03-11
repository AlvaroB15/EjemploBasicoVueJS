var app1 = new Vue({

    el: '#app22',
    data: {
        lista: [
            
        ],
        
        nombre: '',
        
        promedio: ''
    },

    methods: {
        agregarNota: function(){
            estadoT = false;
            if(this.promedio>=11){
                estadoT = true;
            }
            if(this.nombre!='' && this.promedio!=''){   
                this.lista.push({nombre:this.nombre, promedio:this.promedio,estado:estadoT});
                this.nombre = "";
                this.promedio = '';
                
            }
            else{
                alert("Ingresa Correctamente el nombre y su nota.")
                this.nombre = "";
                this.promedio = '';
            }
        }
    },

});













// var app1 = new Vue({

//     el: '#app22',
//     data: {
//         nombreVariable: 'Mensaje de Prueba'
//     }

// });