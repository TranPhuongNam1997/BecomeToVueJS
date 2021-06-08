export default{
    changeTask({commit},newTasks){
        // console.log("actions: changeTask",newTasks);
        commit('CHANGE_TASK',newTasks);
    },
    togglethemtask({commit}){
        console.log('actions changeTask run')
        commit('TOGGLE_THEMTASK');
    }
    
}