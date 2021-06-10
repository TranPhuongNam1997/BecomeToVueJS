//Bản chất như 1 cái computed

export default{
    danhsachtashtimkiemsapxep: state => {
        const {textdulieusearch} = state;
            var itemMoi = state.danhsachTask.filter(item => {
                return item.tenTask.toLowerCase().includes(textdulieusearch.toLowerCase())
          })
          
        var danhsachTask = [...itemMoi];
        if(state.sapxeptheo === 'name'){
            danhsachTask.sort(function(a,b){

                var sosapxeptheo = state.kieusapxep === 'asc'? - 10 : 100
                if (a.tenTask < b.tenTask) {
                    return sosapxeptheo;
                }
                if (a.tenTask > b.tenTask) {
                    return sosapxeptheo * (-1);
                }
                return 0;
    
            },);
            
        }
        else if(state.sapxeptheo === 'mucdo'){
            danhsachTask.sort(function(a,b){
                var sosapxeptheo = state.kieusapxep === 'asc'? - 1 : 1
                if (a.level < b.level) {
                    return sosapxeptheo;
                }
                if (a.level > b.level) {
                    return sosapxeptheo * (-1);
                }
                return 0;
            });
        }
        return danhsachTask;

    }
}
