<template>
    <section class="py-5">
        <div class="container px-5">
            <!-- Contact form-->
            <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                <div class="text-center mb-5">
                    <h1 class="fw-bolder">LOGIN</h1>
                    <p class="lead fw-normal text-muted mb-0">We'd love to hear from you</p>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN" v-if="!isLogin">
                            <!-- ACC input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" v-model="email" type="text" required placeholder="enter your email" />
                                <label for="name">Account</label>
                            </div>
                            <!-- PASS address input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" v-model="password" type="password" required placeholder="emter your passwỏd"  />
                                <label for="email">Password</label>
                            </div>
                            <div class="d-grid">
                                <button class="btn btn-primary btn-lg" type="button" @click="checklogin">Login</button>
                                </div>
                        </form>
                        <template v-else> 
                            <h1>Wellcom Admin</h1>
                            <button @click.prevent="logout" class="btn btn-danger">Logout</button>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapActions,mapState } from 'vuex'
export default {
    
    name: 'login',
    data(){
        return{
            email:'',
            password: '',
        }
    },
    computed:{
        ...mapState(['isLogin'])
    },
    methods:{
        ...mapActions(['atcchecklogin','atclogout']),
        checklogin(){
            let data = {
                email: this.email,
                password: this.password
            }
            this.atcchecklogin(data).then(response=>{
                if(response){
                    this.$notify({
                        group: 'foo',
                        type: 'success',
                        title: 'Thông báo',
                        text: 'Đăng nhập thành công!'
                    });
                    this.$router.push({path: '/'})
                }
                else{
                     this.$notify({
                        group: 'foo',
                        type: 'error',
                        title: 'Thông báo',
                        text: 'Đăng nhập thất bại!'
                    });
                }
            });
        },
        logout(e){
            this.atclogout()
        }
    }
}
</script>

<style>

</style>