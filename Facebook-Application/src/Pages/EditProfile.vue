<template>
<main class="main">
        <div class="container">
            <div class="row align-items-center flex-column">
                <div class="col-lg-6">
                    <div class="post-upload mb-5">
                        <h3 class="title-post">Chỉnh sửa Trang cá nhân</h3>
                        <form class="post-upload-box" v-if="this.currentUser" @submit.prevent="handleSubmitEdit">
                            <div class="font-weight-bold">Ảnh đại diện</div>
                            <div class="avatar-upload">
                                <div class="avatar-edit">
                                    <input v-on:change="ipChangeImage" type='file' id="imageUpload" accept=".png, .jpg, .jpeg"/>
                                    <label for="imageUpload"></label>
                                </div>
                                <div class="avatar-preview">
                                    <div 
                                        id="imagePreview"
                                        :style="{ backgroundImage: 'url(' + avtBaseUrl + ')' }">
                                    </div>
                                </div>
                            </div>
                            <div class="field-ip">
                                <input
                                    type="text" 
                                    placeholder="Họ tên..."
                                    v-bind:value="this.currentUser.fullname"
                                    v-on:input="nameUser = $event.target.value"
                                >
                            </div>
                            <div class="field-ip">
                                <select
                                    v-bind:value="currentUser.gender"
                                    v-on:change="genderUser = $event.target.value"
                                >
                                    <option disabled value="" selected>Giới tính</option>
                                    <option value="nam">Nam</option>
                                    <option value="nữ">Nữ</option>
                                    <option value="Khác">Khác</option>
                                </select>
                            </div>

                            <div class="field-ip">
                                <textarea 
                                    placeholder="Tiểu sử ngắn"
                                    v-bind:value="this.currentUser.description"
                                    v-on:input="storyUser = $event.target.value"
                                ></textarea>
                            </div>

                            <div class="text-center mt-3 mb-3">
                                <button class="btn-lightblue" type="submit">Chỉnh sửa thông tin giới thiệu</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-4">
                </div>
            </div>

        </div>
    </main>
</template>

<script>
import $ from "jquery";

import { mapGetters, mapActions } from 'vuex'

export default {
    name:'edit-profile-page',
    data(){
        return{
            userid: this.$route.params.id,
            avtImage:{
                //tên ảnh
                nameImage: null,
                
                //ảnh hiển thị trên local
                linkBase64Url: ''
            },
            nameUser: '',
            genderUser: '',
            storyUser: '',

        }
    },
    computed:{
        ...mapGetters(['currentUser']),
        avtBaseUrl(){
            if(this.avtImage.linkBase64Url == '' && this.currentUser){
                return this.currentUser.profilepicture
            }
            else return this.avtImage.linkBase64Url
        }
    },
    watch: {
        '$route' (to, from) {
            this.userid = to.params.id;
            this.checkIsCurrentUser();
        }
    },
    created(){
        this.checkIsCurrentUser()
    },
    
    
    methods:{
        ...mapActions(['updateProfile']),
        handleSubmitEdit(){
            console.log('Đã vào handleSubmitEdit');
            // nếu không có giá trị thì khi console ra thì không thu được gì cả

            if(!this.nameUser) this.nameUser = this.currentUser.fullname

            if(!this.genderUser) this.genderUser = this.currentUser.gender

            if(!this.storyUser) this.storyUser = this.currentUser.description

            if(!this.avtImage.nameImage) this.avtImage.nameImage = this.currentUser.profilepicture
            


            if(this.nameUser && this.genderUser && this.storyUser){
                
                let data = {
                    fullname : this.nameUser,
                    gender : this.genderUser,
                    description : this.storyUser,
                }
                if(this.avtImage.nameImage){
                    data.profilepicture = this.avtImage.nameImage;
                }
                console.log('data.profilepicture',data.profilepicture)
                this.updateProfile(data).then(res =>{
                    if(!res.ok){
                        this.$notify({
                            group: 'foo',
                            type:  'error',
                            title: 'Thông báo từ Facebook Fake',
                            text: res.error,
                        });
                    }
                    else{
                        this.$notify({
                            group: 'foo',
                            type:  'success',
                            title: 'Thông báo từ Facebook Fake',
                            text: 'Cập nhật trang cá nhân thành công',
                        });
                    }
                })


            }
        },
        checkIsCurrentUser() {
            
            if(this.userid && this.currentUser) {
                if(this.userid !== this.currentUser.USERID) {
                    this.$router.push('/');
                }
            }
        },
        ipChangeImage(event){

            if(event.target.files && event.target.files.length){

                let ipFileValue = event.target.files[0];
                let vueI = this;
                let reader = new FileReader();

                reader.addEventListener("load", function () {
                    // convert image file to base64 string
                    let preview = reader.result;

                    vueI.avtImage.linkBase64Url = preview;

                    //truyền tên vào nameImage
                    vueI.avtImage.nameImage = ipFileValue;

                }, false);

                if (ipFileValue) {
                    reader.readAsDataURL(ipFileValue);
                }
            }

        }
    },
    
    mounted(){
        // function readURL(input) {
        //     if (input.files && input.files[0]) {
        //         var reader = new FileReader();
        //         reader.onload = function(e) {
        //             $('#imagePreview').css('background-image', 'url('+e.target.result +')').hide().fadeIn(650);
        //         };
        //         reader.readAsDataURL(input.files[0]);
        //     }
        // }
        // $("#imageUpload").change(function() {
        //     readURL(this);
        // });
    }
}
</script>

<style>

</style>