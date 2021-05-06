var vueInstance = new Vue({
    el:'#app',

    data: {
        listData: [
            {
                "id": 1,
                "tiltle": " ihihhihih",
                "body":"asdasdasddasddads"
            },
            {
                "id": 2,
                "tiltle": " rtyutryu",
                "body":"tykghjghjk"
            },
            {
                "id": 3,
                "tiltle": " wrtyrety",
                "body":"tyuityuo"
            },
            
        ],
        listServer: [
            {
                'gmail': "mail1@gmail.com",
                isActive: true,
            },

            {
                'gmail': "mail2@gmail.com",
                isActive: false,
            },
            {
                'gmail': "mail3@gmail.com",
                isActive: false,
            },
            
            
        ],
        

        score:{
            toan: 10,
            van : 9
        }
        

    },

    methods:{
        
        
    },

    computed:{
        checkvaluelist(){

            //cach viet 1 
            // var newlist  =  this.listServer.filter(
            //     function(u){
            //         return u.isActive;
            //     }
            // );

            // return newlist;
            
            //cach viet 2 

            return this.listServer.filter(
                function(u){
                    return u.isActive;
                }
            );
        }
    }
});

