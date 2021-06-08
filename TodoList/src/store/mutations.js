export default{
    CHANGE_TASK(state,newTasks){
        // console.log("mutations: CHANGE_TASK",newTasks);
        state.danhsachTask = newTasks;
    },
    TOGGLE_THEMTASK(state){
        // if(this.hienthiform == true) this.taskSelected = null
        console.log('mutations TOGGLE_THEMTASK run')
        state.hienthiform = !state.hienthiform;
    }

}