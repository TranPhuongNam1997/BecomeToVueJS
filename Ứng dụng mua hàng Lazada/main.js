var vueInstance = new Vue({
    el: '#app',

    data: {
        tieude: 'Áo khoac kaki Nam in chữ có túi dây dáng ôm style Hàn Quốc, áo khoác nam chất kaki dày dặn, không ra màu FREESHIP',
        linkanh: '//vn-test-11.slatic.net/p/555f5dff03b68022e138f0ebd838bcd5.png_720x720q80.jpg_.webp',
        target: '_blank',
        thuonghieu: 'Hàn Quốc',
        giatien: 150000,
        giamgia: 0.1,
        //coi như nó sẽ chọn vào sản phẩm đầu tiên
        sanphamdangchon: 1,
        chitietdanhsachsanpham: [
            {
                hinhanh: '//vn-test-11.slatic.net/p/82ccc95c9321fe13732ed8fd8905efd4.jpg_80x80q80.jpg_.webp',
                soluong: 10,
                tenmau: 'màu trắng',
            },
            {
                hinhanh: '//vn-test-11.slatic.net/p/555f5dff03b68022e138f0ebd838bcd5.png_80x80q80.jpg_.webp',
                soluong: 20,
                tenmau: 'màu xám',
            },
            {
                hinhanh: '//vn-test-11.slatic.net/p/cd91710afe9f44d8ddca01ae0b00da94.jpg_80x80q80.jpg_.webp',
                soluong: 30,
                tenmau: 'màu đỏ',
            },
            {
                hinhanh: '//vn-test-11.slatic.net/p/884cdea44ad6cba854146941c1b0f57b.jpg_80x80q80.jpg_.webp',
                soluong: 0,
                tenmau: 'màu đen',
            },

        ],

        mota: 'Chống nắng, chống gió tốt Chất liệu nỉ của áo giúp tăng khả năng giữ ấm, cách nhiệt cho cơ thể, Có khả năng thấm hút mồ hôi, chống bí bách, ẩm ướt, khó chịu Màu sắc trang nhã dễ dàng mặc cùng các trang phục khác như áo thun, áo sơ mi,…Shop nói không với hàng kém chất lượng. Sản phẩm đã tham gia chương trình FREESHIPMAX, mua hàng bằng app Lazada để được miễn phí ship hoặc liên hệ shop để được hỗ trợ.',
        
        mota2: '<ul><li> Chống nắng, chống gi& oacute; tốt</li><li>Chất liệu nỉ của &aacute;o gi&uacute;p tăng khả năng giữ ấm, c&aacute;ch nhiệt cho cơ thể</li><li>C&oacute; khả năng thấm h&uacute;t mồ h&ocirc;i, chống b&iacute; b&aacute;ch, ẩm ướt, kh&oacute; chịu</li><li>M&agrave;u sắc trang nh&atilde; dễ d&agrave;ng mặc c&ugrave;ng c&aacute;c trang phục kh&aacute;c như &aacute;o thun, &aacute;o sơ mi,&hellip;Shop n&oacute;i kh&ocirc;ng với h&agrave;ng k&eacute;m chất lượng.</li><li>Sản phẩm đ&atilde; tham gia chương tr&igrave;nh FREESHIPMAX, mua h&agrave;ng bằng app Lazada để được miễn ph&iacute; ship hoặc li&ecirc;n hệ shop để được hỗ trợ.</li></ul >',
    },

methods: {

    checkClassActive(vitricuaindex){
        return {
            active: this.sanphamdangchon == vitricuaindex
        }
    }

},

computed: {

    //format price
    dinhDangGia(){
        var number = this.giatien;
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
    },

    giaChinhXac(){
        var giaban = this.giatien - this.giatien * this.giamgia;
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(giaban);
    },
    getSanPham(){
        var vitri = this.sanphamdangchon;
        return this.chitietdanhsachsanpham[vitri];
    },


},
});
