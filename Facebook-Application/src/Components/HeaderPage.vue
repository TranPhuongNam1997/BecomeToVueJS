<template>
    <header class="header-home">
        <div class="container">
            <div class="header-block">
                <div class="header-left">
                    <div class="logo">
                        <router-link to="/">
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
                        </router-link>
                    </div>

                    <form class="box-search" @submit.prevent="handleSearch">
                        <input v-model="stringSearch" type="text" placeholder="Tìm kiếm trên Facebook">
                        <button type="submit">
                            <i class="hu5pjgll m6k467ps"></i>
                        </button>

                    </form>
                </div>
                <div class="header-right">
                    <button class="btn-category" type="button">
                        <svg viewBox="0 0 28 28" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv" height="28"
                             width="28">
                            <path fill="#3576F1" d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"></path>
                        </svg>
                        <span>Danh mục</span>
                    </button>
                    <router-link to="/post-page" class="upload-post">
                        <label tabindex="0" class="input-file-trigger">
                            <img src="../../dist/img/icon-upload-light-12.svg" alt="">
                            <span>Đăng bài</span>
                        </label>
                    </router-link>

                    <!-- if not login -->
                    <router-link v-if="!isLogin" to="/login" class="link-login">Đăng nhập</router-link>

                    <router-link :to="{name: 'personal',params:{id: currentUser.USERID}}" v-else-if="currentUser" class="name-user">
                        <img :src="getImgAvtNav" @error="imageUrlAlt" alt="img">
                        <span>{{getNameUser}}</span>
                        <div class="show-logout" v-on:click.prevent="handleLogout">
                            <div class="show-logoutchild">
                                <a ><i class="fa fa-sign-out-alt"></i> Đăng xuất</a>
                            </div>
                        </div>
                    </router-link>

                </div>
            </div>
        </div>
        <!-- begin navigation-->
        <navigation-page/>
        <!-- end navigation-->
    </header>
</template>


<script>
import { mapGetters , mapActions } from 'vuex'
import $ from "jquery";
import NavigationPage from './NavigationPage.vue'

export default {
    components: { NavigationPage },
    name: 'header-comp',
    data(){
        return{
            //khai báo biến cục bộ 
            stringSearch: ''
        }
    },
    computed:{
        ...mapGetters(['isLogin','currentUser']),
        getImgAvtNav(){
            if(this.currentUser.profilepicture){
                return this.currentUser.profilepicture
            } 
            else{
                return '../../dist/img/defaultavt.png'

            }
        },
        getNameUser(){
            if(this.currentUser.fullname) return this.currentUser.fullname
            return ''
        }
    },  
    methods:{
        ...mapActions(['logOut']),
        handleLogout(){
            var questionLogout = this.$swal({
                title: 'Bạn chắc chắn muốn đăng xuất?',
                // text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#326EE4',
                cancelButtonColor: '#E11634',
                confirmButtonText: 'Đăng xuất'
                }).then((result) => {
                if (result.isConfirmed) {
                    
                    if(questionLogout){
                        this.logOut().then(res =>{
                            this.$router.push('/login')
                        })
                    }
                    
                }
            });
            
        },
        imageUrlAlt(event) {
            event.target.src = "../../dist/img/defaultavt.png"
        },
        handleSearch(){
            console.log('da submit stringSearch = ',this.stringSearch);
            this.$router.push({
                name:'search',
                query: {
                    query: this.stringSearch
                }
            });
        }
    },
    
	mounted(){
        $(document).ready(function(){
            // begin click outside
			$(".btn-category").click(function (event) {
				$('.navigation').slideToggle(300,'swing');
				$(this).toggleClass('active');
				event.stopPropagation();
			});
			
			$(".nav-block ul li a").click(function () {
				$('.navigation').slideUp(300,'swing');
				$(".btn-category").removeClass('active');
			});

			
			const $menu = $('.header-home');
			$(document).mouseup(e => {
				if (!$menu.is(e.target)
					&& $menu.has(e.target).length === 0)
				{
					$('.btn-category').removeClass('active');
					$('.navigation').slideUp(300,'swing');
				}
			});
        })
	}
    
}
</script>

<style scoped>
    /* có thể dùng scss  */
    .name-user{
        display: flex;
        align-items: center;
        position: relative;
        margin-left: 8px;
        transition: all 0.2s ease;
        padding: 4px 10px 4px 4px;
        border-radius: 30px;
        
    }
    .name-user:hover{
        background: #F2F2F2;
        color: #1e1633;

        transition: all 0.2s ease;
    }
    .name-user img{
        width: 28px;
        height: 28px;
        border-radius: 50%;
        overflow: hidden;
        object-fit: cover;
    }
    .name-user span{
        font-weight: 500;
        font-size: 15px;
        margin-left: 6px;
    }
    .name-user .show-logout{
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding-top: 10px;
        display: none;
    }
    .name-user:hover .show-logout{
        display: block;
    }
    .name-user .show-logout:after{
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\F0D8";
        position: absolute;
        top: -7px;
        left: 50%;
        color: #fff;
        transform: translateX(-50%);
        font-size: 21px;
        text-shadow: 0 -1px 5px #dcdcdc;
    }
    .show-logoutchild{
        width: 150px;
        background: #fff;
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.14);
        padding: 10px;
        border-radius: 6px;
    }
    .show-logoutchild:hover{
        background: #f8f8f8;
    }
    .name-user .show-logout:hover{
        color: #1e1633;
    }
    .show-logoutchild a:hover{
        color: #000;
    }
    .show-logoutchild i{
        margin-right: 6px;

        color: #3576F1;
    }
    .box-search button{
        position: absolute;
        left: 6px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
    }
    .box-search i{
        position: unset;
        transform: none;
    }
</style>