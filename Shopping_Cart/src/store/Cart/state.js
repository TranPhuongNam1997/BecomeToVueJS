
let initgiohang = JSON.parse(window.localStorage.getItem('giohang'));

console.log('initgiohang',initgiohang)
console.log('initgiohang',initgiohang.dsgiohang)

if(initgiohang && initgiohang.dsgiohang){
    initgiohang = initgiohang.dsgiohang;
}
else{
    initgiohang = [];
}


export default{
    dsgiohang: initgiohang,
}