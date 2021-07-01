<template>
    <div>
        <div class="container-notfound">
            <div class="flex-botfound">
                <div>
                    <img src="../../dist/img/404_failed.svg" alt="img">
                    <div class="cl-gray">Trang này không hiển thị</div>
                    <div class="mt-1 mb-3">Có thể liên kết đã hỏng hoặc trang đã bị gỡ. Hãy kiểm tra xem liên kết mà bạn đang cố mở có chính xác không.</div>
                    <div class="text-center">
                        <router-link :to="{ name: 'home-page'}" tag="a" class="btn-go-bt" >Đi tới Bảng tin</router-link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import HeaderPage from '../Components/HeaderPage.vue'
export default {
    name:'not-found',
    components: { HeaderPage },
    data(){
        return{
            
        }
    }
}
</script>

<style>
    .container-notfound{
        margin: 0 auto;
        max-width: 430px;
        width: 100%;
    }
    .flex-botfound{
        text-align: center;
        color: #65676B;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    .flex-botfound img{
        width: 112px;
        display: block;
        margin: 0 auto 15px;
    }
    .flex-botfound .cl-gray{
        font-size: 20px;
        font-family: Segoe UI;
        color: #65676B;
        font-weight: 700;
    }
    .btn-go-bt{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: #3576F1;
        border-radius: 5px;
        color: #fff;
        padding: 5px 40px;
        height: 40px;
        border: none;
        font-weight: 500;
        transition: all 0.2s ease;
    }
    .btn-go-bt:hover{
        background: #3370E5;
        color: #fff;
        transition: all 0.2s ease;

    }
    
</style>