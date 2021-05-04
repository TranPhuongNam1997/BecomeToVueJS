var vueInstance = new Vue({
    el:'#app',

    data: {
        counter: 0,
        clientX: 0,
        clientY: 0,

        a:0,
        b:0,
        number: 20,
        yourname: 'trần',
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
            // console.log(e);
        },
        handleMouseMoveChild(e){
            // console.log('handleMouseMoveChild123',e.target);
        },
        

        yournamehandle(e){
            console.log(e.target.value);
            this.yourname = e.target.value;
        },
    },

    computed:{
        //chỉ được thực thi khi có bất kì dữ liệu trong này thay đổi
        plusA(){
            console.log('running A');
            return this.a + this.number;
        },
        plusB(){
            console.log('running B');
            return this.b + this.number;
        },
        
        

    }
});


