<template>
   <!-- Header-->
    <header class="bg-dark py-5">
        <div class="container px-5">
            <div class="row gx-5 align-items-center justify-content-center">
                <div class="col-lg-8 col-xl-7 col-xxl-6">
                    <div class="my-5 text-center text-xl-start">
                        <h1 class="display-5 fw-bolder text-white mb-2">{{title}}</h1>
                        <p class="lead fw-normal text-white-50 mb-4">{{subbanner}}</p>
                        <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start" :class="classname">
                            <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                            <a class="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
                        </div>
                        <slot></slot>
                    </div>
                </div>
                <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                    <img class="w-100 img-fluid rounded-3 my-5" 
                        :src="linkimg" 
                        alt="..." 
                    />
                    <!-- <img class="w-100 img-fluid rounded-3 my-5" 
                        src="../assets/images/bannerhome.jfif" 
                        alt="..." 
                    /> -->
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'header-page',
    props:{
        classname:{
            type: String,
            default: 'class-home'
        },
        linkimg:{
            type: String,
            default: 'https://img1.kienthucvui.vn/uploads/2021/01/13/anh-idol-han-quoc-dien-trai_023540996.jpg'
        },
        title:{
            type: String,
            default: 'Home page modern for handsome'
        },
        subbanner:{
            type: String,
            default: 'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!'
        }
    }
}
</script>

<style>

</style>