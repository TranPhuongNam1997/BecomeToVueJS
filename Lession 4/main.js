var vueInstance = new Vue({
    el:'#app',

    data: {
        tabselected: 'login',
        

    },

    methods:{
        
        changeStateTab(tab){
            this.tabselected = tab;
        }

    }   
});
