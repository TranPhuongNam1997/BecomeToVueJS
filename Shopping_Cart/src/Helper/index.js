const donvitien = function(giatritien,tenloaitien, vitri){
    if(vitri === 'phai'){
        return giatritien + ' ' + tenloaitien
    } 
    else{
        return tenloaitien + ' ' + giatritien
    } 
}

const validatesoluong = function(soluong){
    let number = parseInt(soluong);
    if(number == soluong && !isNaN(number)){
        return number >=1
    }
    return false
}
export{
    donvitien,
    validatesoluong,
}
