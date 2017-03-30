<template>
  <div class="intro">
    <div class="wrapper">
      <div class="info">
        <h1>博慧教育</h1>
        <h2>博慧教育致力于为您的孩子提高成绩，为社会培养栋梁</h2>
      </div>
      <div class="video">
        <div>
        <router-link :to="{name: 'video'}">
        <button class="video-btn"></button>
        </router-link>
        </div>
      </div>
    </div>
    <carousel></carousel>
    <div class="decription">
      <div class="column">
      <h3>
      博慧教育培训学校致力于通过全面系统的文化课培训和科学有效的训练方式提高学生的学习能力、应试能力和综合竞争力。为弥补学校
      教学中顾及不到的学科短板，博慧教育由具有丰富教学经验的老师亲自授课，同时博慧教育也提供为中小学生量身打造的学生心理辅导，
      力图打造一个服务于岚县乃至吕梁的综合性培训平台，让您的孩子的成绩搭乘博慧的火箭，扶摇而上，直上青云。
      </h3>
      </div>
      <div class="column">
        <img src="../assets/goUp.gif">
      </div>
    </div>
  </div>
  
</template>

<script>
import Carousel from './Carousel'

export default {
  name: 'intro',
  data () {
    return {
    }
  },
  components: {
    'carousel': Carousel
  }
}
</script>

<style scoped>
.intro {
  height: 590px;
  background-image: url(../assets/intro_bg.png);
  background-repeat: repeat-x;
  padding: 50px;
}

.video  {
  width: 50%;
  float: left;
  text-align: -webkit-center;
}

.video div {
  width: 300px;
  height: 300px;
  background-image: url(../assets/video_btn.svg);
}

.video-btn {
  margin: 50px auto;
  width: 200px;
  height: 200px;
  padding: 0;
  border: 2px solid rgba(0,0,0,0.07);
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0);
  background-image: url(../assets/video_pause.svg), url(../assets/video_btn_bg.jpg);
  background-size: auto auto, 200px 200px;
  background-position: center center;
  background-repeat: no-repeat;
  outline: none;
  cursor: pointer;
}

.video-btn:hover {
  opacity: 0.8;
}

.wrapper {
  width: 860px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
  overflow: hidden;
  margin-bottom: 70px;
}

.info {
  width: 50%;
  float: left;
}

h1 {
  font-size: 70px;
  color: rgb(88,75,79);
}

h2 {
  color: rgb(132,145,147);
}

.decription {
  height: 510px;
  background-color: white;
  z-index: 2;
}

.column {
  display: table-cell;
  float: none;
  height: 300px;
  width: 50%;
  z-index: 3;
  padding: 20px;
  vertical-align: middle;
}

h3 {
  padding: 30px 80px;
  font-size: 20px;
  background-color: rgba(248, 248, 248, 0.8)
}

/*.illustration-packages {
    background-image: url(../assets/goUp.gif);
}*/
</style>
