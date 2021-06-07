export default{
    //cấu trúc distrucring  ES6 để phân rã object
    incrementAction ({commit,dispatch},obj){ 
        // 1 action : goi den 1 mutation
        console.log("action: increment",obj.number);
        dispatch('testAbc');
        commit('increment',10);
      },
      decrementAction({commit},obj){
        // 1 action : goi den 1 mutation
        console.log("action: decrement",obj.number)
        commit('decrement');
      },
      testAbc(context){
        console.log('abc')
      }
}