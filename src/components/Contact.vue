<template>
  <div class="contact">
<div class="contact-method">
  <div>
  <h2>联系我们</h2>
  <h4><span>地址：</span>吕梁市岚县北村远志中学背面，明德书社旁边</h4>  
  <h4><span>电话：</span>151-0358-1823</h4>
  <h4><span>微信：</span>liuji1274800272</h4>
  <h4><span>映客：</span>liuji1274800272</h4>
  <h4><span>邮箱：</span>liuji@163.com</h4>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style scoped>
.contact {
  height: 500px;
  width: 100%;
  background-color: rgb(250, 246, 236);
  margin-top: 800px;
  background-image: url(../assets/contact_bg.jpg);
}

.contact-method {
  background-size: 100% 630px;
  z-index: 4;
  opacity: 0.9;
  width: 50%;
  float: left;
}

img {
  width: 50%;
  float: left;
}

h2 {
  margin-left: 150px;
  padding-top: 50px;
  padding-bottom: 30px;
}

h4 {
  font-size: 16px;
  margin-left: 150px;
  margin-top: 0px;
  padding-bottom: 8px;
  font-family: serif BiauKai;
  color: rgba(25, 24, 23, 0.8);
}

h4 span {
  color: gray;
}
</style>
