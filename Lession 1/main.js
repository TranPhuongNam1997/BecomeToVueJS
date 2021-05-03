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
        ]
    },
    //method là các hàm hỗ trợ trong quá trình tính toán

    methods:{
        say: function(){
            this.seen = false;
            console.log('a');
            this.nam()

        },

        nam(){
            console.log('Nam ta')
        }
        
    }   
});



console.log(vueInstance)

// setTimeout(() => {
//     vueInstance.tilte = 'Nhin cai choa gi';
// }, 3000);

