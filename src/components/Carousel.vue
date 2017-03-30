<template>
  <div class="carousel">
    <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in 5">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  background-image: url(../assets/bg_2.jpg);
  background-size: 100% 500px;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
  background-image: url(../assets/bg_3.jpg);
}
</style>
