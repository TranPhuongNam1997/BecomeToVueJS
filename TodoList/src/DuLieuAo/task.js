// thêm uuidv4 để tạo định danh id (mã hóa)
//không liên quan gì tới vue nên là không khai báo ở cấp toàn cục
//cách cài đặt: sử dụng câu lệnh npm install uuid

import { v4 as uuidv4 } from 'uuid';



export default [
    {
        id: uuidv4(),
        tenTask: 'OT: Kết xuất file màn hình Sổ lệnh khớp: thêm dòng tổng KL, GT ngày',
        level: 0 //thấp
        
   },
   {
        id: uuidv4(),
        tenTask: 'BO/ Thêm chứng khoán vào loại hình ứng trước hệ thống không lưu',
        level: 1 //vừa
        
   },
   {
        id: uuidv4(),
        tenTask: 'VSD.Portal 2020 -> Yc chỉnh sửa 20/5/2021: Đề nghị sửa chức năng tìm kiếm',
        level: 2 //cao
        
   },
   {
        id: uuidv4(),
        tenTask: 'VSD.Portal 2020 -> Yc chỉnh sửa 20/5/2021',
        level: 0 //thấp
        
   },

]