export default{
    //              payload
    increment(state,number){
      console.log('mutation increment',state)
      state.count += number;
    },
    //              payload

    decrement(state,number = 1){
      console.log('mutation decrement',state)

      state.count -=number;
    }
  }