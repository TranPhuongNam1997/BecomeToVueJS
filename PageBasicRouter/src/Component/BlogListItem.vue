<template>
    <div class="col-lg-4 mb-5">
        <div class="card h-100 shadow border-0">
            <img class="card-img-top" :src="listblockItem.imglink" alt="..." />
            <div class="card-body p-4">
                <a class="text-decoration-none link-dark stretched-link" href="#!"><h5 class="card-title mb-3">{{listblockItem.postname}}</h5></a>
                <p class="card-text mb-0">{{listblockItem.postsub}}</p>
            </div>
            <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                <div class="d-flex align-items-end justify-content-between">
                    <div class="d-flex align-items-center">
                        <img class="rounded-circle me-3" :src="listblockItem.imglinkuser" alt="..." />
                        <div class="small">
                            <div class="fw-bold">{{listblockItem.username}}</div>
                            <div class="text-muted">{{listblockItem.postdate}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'blog-item',
    props:{
        listblockItem:{
            type: Object,
            default: {}
        }
    }
}
</script>

<style>

</style>