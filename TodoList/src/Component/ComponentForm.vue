<template>
    <div class="col-12 col-lg-6">
          <!-- ADD : START -->

          <form-them-moi/>

          <!-- ADD : END -->

          <form
              action=""
              method="POST"
              class="form-inline justify-content-between"
          >
            <div class="form-group">
              <label class="sr-only" for="">label</label>
              <input type="text" class="form-control" placeholder="Tên Task" />
            </div>
            <div class="form-group">
              <label class="sr-only" for="">label</label>
              <select name="ds" class="form-control" required="required">
                <option value="0">Thấp</option>
                <option value="1">Vừa</option>
                <option value="2">Cao</option>
              </select>
            </div>

            <button type="button" class="btn btn-primary">Tìm kiếm</button>
            <button type="button" class="btn btn-secondary">Hủy</button>
          </form>
        </div>
</template>
<script>
import FormThemMoi from './FormThemMoi.vue'

export default {
  components: { FormThemMoi },
    name: 'componentform',
    data(){
        return{

        }
    }
}
</script>
<style scoped>

</style>