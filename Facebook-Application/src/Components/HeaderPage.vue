<template>
    <header class="header-home">
        <div class="container">
            <div class="header-block">
                <div class="header-left">
                    <div class="logo">
                        <a href="#">
                            <svg viewBox="0 0 36 36" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4" fill="url(#jsc_c_3)"
                                 height="40" width="40">
                                <defs>
                                    <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_c_3">
                                        <stop offset="0%" stop-color="#0062E0"></stop>
                                        <stop offset="100%" stop-color="#19AFFF"></stop>
                                    </linearGradient>
                                </defs>
                                <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                                <path fill="#fff" class="p361ku9c"
                                      d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
                            </svg>
                        </a>
                    </div>
                    <div class="box-search">
                        <input type="text" placeholder="Tìm kiếm trên Facebook">
                        <i class="hu5pjgll m6k467ps"></i>
                    </div>
                </div>
                <div class="header-right">
                    <button class="btn-category" type="button">
                        <svg viewBox="0 0 28 28" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv" height="28"
                             width="28">
                            <path fill="#3576F1" d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"></path>
                        </svg>
                        <span>Danh mục</span>
                    </button>
                    <a href="#" class="upload-post">
                        <label tabindex="0" class="input-file-trigger">
                            <img src="../../dist/img/icon-upload-light-12.svg" alt="">
                            <span>Đăng bài</span>
                        </label>
                    </a>
                    <a href="#" class="link-login">Đăng nhập</a>

                </div>
            </div>

        </div>
        <!-- begin navigation-->
        <div class="navigation">
            <div class="container">
                <div class="nav-block">
                    <ul>
                        <li><a href="#">Funny</a></li>
                        <li><a href="#">Animals</a></li>
                        <li><a href="#">Anime & Mâng</a></li>
                        <li><a href="#">Awesome</a></li>
                        <li><a href="#">Basketball</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Car</a></li>
                        <li><a href="#">Comic</a></li>
                        <li><a href="#">Cosplay</a></li>
                        <li><a href="#">Countryballs</a></li>
                        <li><a href="#">Classical Art Memes</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Girl</a></li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">K-POP</a></li>
                        <li><a href="#">V-POP</a></li>
                        <li><a href="#">Pokémon</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">School</a></li>
                        <li><a href="#">Star war</a></li>
                        <li><a href="#">Coder</a></li>
                        <li><a href="#">Travel</a></li>
                        <li><a href="#">Sport</a></li>
                    </ul>

                </div>
            </div>
        </div>
        <!-- end navigation-->
    </header>
</template>


<script>
// import $ from "jquery";
export default {
    name: 'header-comp',
    data(){
        return{

        }
    },
    mounted(){
        // $(".btn-category").click(function (event) {
        //     console.log('a')
        //     $('.navigation').slideToggle(300,'swing');
        //     $(this).toggleClass('active');
        //     event.stopPropagation();
        // });
        
        // const $menu = $('.header-home');
        // $(document).mouseup(e => {
        //     if (!$menu.is(e.target)
        //         && $menu.has(e.target).length === 0)
        //     {
        //         $('.btn-category').removeClass('active');
        //         $('.navigation').slideUp(300,'swing');
        //     }
        // });
    },
    methods:{
        // onclickCategory(event){
        //     console.log(event);
        //     $('.navigation').slideToggle(300,'swing');
        //     $(this).toggleClass('active');
        //      event.stopPropagation();
        // }
    }
    
}
</script>

<style>

</style>