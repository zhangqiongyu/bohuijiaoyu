<template>
  <div class="navbar">
    <div class="nav-item" v-for="(title, index) in themeTitle">
      <router-link :to=themeRouter[index]>
        {{title}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      themeTitle: [
        '首页',
        '学生风采',
        '师资力量',
        '硬件设施',
        '博慧历史',
        '未来展望'
      ],
      themeRouter: [
        {name: 'index', params: ''},
        {name: 'students', params: ''},
        {name: 'teachers', params: ''},
        {name: 'hardware', params: ''},
        {name: 'history', params: ''},
        {name: 'future', params: ''}
      ]
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 70px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
}

.nav-item {
  display: inline-block;
  margin: 30px 60px;
}

a {
  text-decoration: none;
  color: white;
  font-family: "PingHei","Helvetica Neue","Helvetica","Arial","Verdana","sans-serif";
}
</style>
