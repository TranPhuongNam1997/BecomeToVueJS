<template>
    <div class="sort-cmt">
        <div></div>
        <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                    <span>Cũ nhất</span>
                    <span>Hiển thị bình luận từ cũ nhất đến mới nhất</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span>Gần đây nhất</span>
                    <span>Hiển thị bình luận từ mới nhất đến cũ nhất</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sort-cmt',
    data(){
        return{

        }
    }
}
</script>

<style>

</style>