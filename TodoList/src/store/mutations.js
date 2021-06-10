export default{
    CHANGE_TASK(state,newTasks){
        // console.log("mutations: CHANGE_TASK",newTasks);
        state.danhsachTask = newTasks;
    },
    TOGGLE_THEMTASK(state){
        if(state.hienthiform == true) state.taskSelected = null
        // console.log('mutations TOGGLE_THEMTASK run')
        state.hienthiform = !state.hienthiform;
    },
    HANDLE_SEARCH(state,textdulieusearch){
        // console.log('mutation HANDLE_SEARCH',textdulieusearch);

        state.textdulieusearch = textdulieusearch;
    },
    HANDLE_SAPXEP(state,{sapxeptheo,kieusapxep}){
        console.log('mutations handleSapXep',sapxeptheo,kieusapxep);    

        state.sapxeptheo = sapxeptheo;
        state.kieusapxep = kieusapxep;
    },
    HANDLE_ADD(state,itemnewadd){
        state.danhsachTask.push(itemnewadd);
    },
    
    HANDLE_EDIT(state,itemedit){
        state.hienthiform = true;
        state.taskSelected = itemedit;
    },


}