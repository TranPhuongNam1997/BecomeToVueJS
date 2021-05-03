var vueInstance = new Vue({
    el:'#app',

    data: {
        counter: 0,
        clientX: 0,
        clientY: 0,
    },

    methods:{
        handerClick (number,event){
            console.log(number,event);
            this.counter += number;
        },
        handleMouseMove(e){
            console.log(e);
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        },
        handleSubmitForm(e){
            console.log(e);
        }

    }   
});


