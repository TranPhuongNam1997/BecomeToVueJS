export default{
    changeTask({commit},newTasks){
        // console.log("actions: changeTask",newTasks);
        commit('CHANGE_TASK',newTasks);
    },
    togglethemtask({commit}){
        console.log('actions changeTask run')
        commit('TOGGLE_THEMTASK');
    },
    handleSearch({commit},textdulieusearch){
        console.log('action handleSearch',textdulieusearch);
        commit('HANDLE_SEARCH',textdulieusearch)
    },
    handleSapXep({commit},{sapxeptheo,kieusapxep}){
        console.log('action handleSapXep',sapxeptheo,kieusapxep);
        commit('HANDLE_SAPXEP',{sapxeptheo,kieusapxep});
    },
    handleDelete({commit,state},taskdelete){
        console.log('action handleDelete');

        let newdanhsachTast = state.danhsachTask.filter(item => item.id !== taskdelete.id);

        commit('CHANGE_TASK',newdanhsachTast);
    },
    handleAdd({commit},itemnewadd){
        commit('HANDLE_ADD',itemnewadd);
    },
    handleEdit({commit},itemedit){
        commit('HANDLE_EDIT',itemedit);
    },

    handleEditForm({commit,state},taskedit){
        let index = state.danhsachTask.findIndex(item => item.id === taskedit.id);

        let danhsachTaskClone = [...state.danhsachTask];

        if(index !== -1){
            danhsachTaskClone.splice(index,1,taskedit);

            commit('CHANGE_TASK',danhsachTaskClone);
            commit('TOGGLE_THEMTASK');
        }
        
    },
    
}