var vueInstance = new Vue({
    el:'#app',

    data: {
        tilte: 'Toi ten la nam',
        seen: true,
        message1: 'Hãy sửa thông điệp này',

        todos: [
            {text: 'học javascript1'},
            {text: 'học javascript2'},
            {text: 'học javascript3'}
        ],

        checkit: false,

        price: '50000'
    },
    //method là các hàm hỗ trợ trong quá trình tính toán

    methods:{
        say: function(){
            this.seen = false;
            console.log('a');
            this.nam()

        },

        nam(){
            console.log('Nam ta');
        },
        formatPrice(){
            // console.log(this);

            var number = this.price;
            return  new  Intl.NumberFormat('de-DE',{style: 'currency', currency:'VND'}).format(number);

        
        },
        
        

    }   
});



console.log(vueInstance)

// setTimeout(() => {
//     vueInstance.tilte = 'Nhin cai choa gi';
// }, 3000);

