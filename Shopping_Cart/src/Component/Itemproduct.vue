<template>
  <div class="item-pro row">
    <div class="col-md-3">
      <img :src="sanpham.tenanh" class="w-100" alt="anh" />
    </div>
    <div class="col-md-6">
      <div class="name-product">{{ sanpham.tensanpham }}</div>
      <div class="descript">{{ sanpham.motasanpham }}</div>
    </div>
    <div class="col-md-3">
      <div class="d-flex h-100 flex-column justify-content-between">
        <template v-if="sanpham.cothemua">
          <input type="number" value="1" v-model="soluongmua" />

          <button class="btn btn-buy" type="button" @click="btnmua">
            {{ xetdonvitien }}
          </button>
        </template>
        <template v-else>
          <div></div>
          <button disabled class="btn btn-buy">{{ xetdonvitien }}</button>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { donvitien, validatesoluong } from "../Helper";
import { themgiohangthanhcong, themgiohangthatbai } from "../Constants/config";
import { mapActions } from "vuex";

export default {
  name: "itemlistproduct",
  data() {
    return {
      soluongmua: 1,
    };
  },
  props: {
    sanpham: {
      type: Object,
      default: {},
    },
  },
  computed: {
    xetdonvitien() {
      return donvitien(this.sanpham.gia, "VND", "phai");
    },
  },

  methods: {
    ...mapActions({
        'themgiohang': "nutmuahang",
    }),

    btnmua() {
      let check = validatesoluong(this.soluongmua);
      if (check == true) {
        // console.log('Số lượng hợp lệ',sl);r

        let objmuahang = {
          sanpham: this.sanpham,
          soluong: parseInt(this.soluongmua),
        };

        this.themgiohang(objmuahang);

        this.$notify(themgiohangthanhcong);

        // console.log('btnmua',objmuahang)
      } else {
        console.log("Số lượng mua không hợp lệ", this.soluongmua);
        this.$notify(themgiohangthatbai);
      }
    },
  },
};
</script>
