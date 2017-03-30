<template>
  <div class="history">
    <navbar></navbar>    
    <section id="cd-timeline" class="cd-container">
        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
                <img src="../assets/History/cd-icon-picture.svg" alt="Picture">
            </div>

            <div class="cd-timeline-content">
                <h2>博慧教育初创于兴县</h2>
                <p>博慧教育初创于2015年夏，始设址于兴县龙凤幼儿园，当届招生近六十人，主要为小升初同学服务，
                聘请来自临汾师范大学、清华大学等名校的老师授课，首届学生最终多数升入兴县友兰中学、兴县三中等高中，从而获得了良好口碑。
                </p>
                <span class="cd-date">2015夏</span>
            </div>
        </div>
        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">
                <img src="../assets/History/cd-icon-movie.svg" alt="Movie">
            </div>

            <div class="cd-timeline-content">
                <h2>博慧教育口碑传播</h2>
                <p>2016年夏，博慧教育在苗苗幼儿园开班，当届招生近百人，分为初中部和高中部，初中部致力于初升高考试强化，高中部主要为高一
                高二学生查漏补缺，夯实基础；同时，聘请了来自清华大学、复旦大学的高材生担任授课老师，在当届学生中反响甚好。
                </p>
                <span class="cd-date">2016年夏</span>
            </div>
        </div>
        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
                <img src="../assets/History/cd-icon-picture.svg" alt="Picture">
            </div>

            <div class="cd-timeline-content">
                <h2>博慧教育迁址岚县</h2>
                <p>2016年秋，博慧教育迁址岚县普明镇东村，专注于周末培训，为多个年级的学生开设各类科目，聘请了来自普明明德中学的老师，因材施教，从义
                务教育课程到各类兴趣特长班，只要您的孩子来了这里，我们将为他们挖掘潜力，让他们的成绩百尺竿头更进一步。
                </p>
                <span class="cd-date">2016年秋</span>
            </div>
        </div>
        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">
                <img src="../assets/History/cd-icon-movie.svg" alt="Movie">
            </div>

            <div class="cd-timeline-content">
                <h2>博慧教育逐渐扩大</h2>
                <p>博慧教育开设寒假辅导班，让学生养成“学习就是力量，学习就是快乐”的好习惯，即使在漫长的寒假里，也不至于落下功课。
                决不让学生输在学习这一马拉松的中途，帮助学生体会到坚持就是胜利！
                </p>
                <span class="cd-date">2016年冬</span>
            </div>
        </div>
        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
                <img src="../assets/History/cd-icon-picture.svg" alt="Location">
            </div>

            <div class="cd-timeline-content">
                <h2>博慧教育稳定发展</h2>
                <p>2017年伊始，我们招生近一百二十余人，在教授文化课的同时，也注重学生身体健康，开设了体育课，寓学于乐，让学生在繁忙的学习间隙里，
                得到适度的放松，调整心情，以更好的姿态投入学习。
                </p>
                <span class="cd-date">2017年春</span>
            </div>
        </div>
            <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">
                <img src="../assets/History/cd-icon-location.svg" alt="Location">
            </div>

            <div class="cd-timeline-content">
                <h2>未来......</h2>
                <p>博慧教育培训学校致力于通过全面系统的文化课培训和科学有效的训练方式提高学生的学习能力、应试能力和综合竞争力。为弥补学校
                教学中顾及不到的学科短板，博慧教育由具有丰富教学经验的老师亲自授课，同时博慧教育也提供为中小学生量身打造的学生心理辅导，
                力图打造一个服务于岚县乃至吕梁的综合性培训平台。</p>
                <span class="cd-date">未来......</span>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  name: 'history',
  components: {
    'navbar': NavBar
  }
}
</script>

<style>
/* -------------------------------- 

Primary style

-------------------------------- */
html * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-size: 100%;
  color: #7f8c97;
  background-color: #e9f0f5;
}



img {
  max-width: 100%;
}

/* -------------------------------- 

Modules - reusable parts of our design

-------------------------------- */
.cd-container {
  /* this class is used to give a max-width to the element it is applied to, and center it horizontally when it reaches that max-width */
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;
}
.cd-container::after {
  /* clearfix */
  content: '';
  display: table;
  clear: both;
}

/* -------------------------------- 

Main components 

-------------------------------- */

#cd-timeline {
  position: relative;
  padding: 2em 0;
  margin-top: 2em;
  margin-bottom: 2em;
}
#cd-timeline::before {
  /* this is the vertical line */
  content: '';
  position: absolute;
  top: 0;
  left: 18px;
  height: 100%;
  width: 4px;
  background: #d7e4ed;
}
@media only screen and (min-width: 1170px) {
  #cd-timeline {
    margin-top: 3em;
    margin-bottom: 3em;
  }
  #cd-timeline::before {
    left: 50%;
    margin-left: -2px;
  }
}

.cd-timeline-block {
  position: relative;
  margin: 2em 0;
}
.cd-timeline-block:after {
  content: "";
  display: table;
  clear: both;
}
.cd-timeline-block:first-child {
  margin-top: 0;
}
.cd-timeline-block:last-child {
  margin-bottom: 0;
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-block {
    margin: 4em 0;
  }
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
}

.cd-timeline-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}
.cd-timeline-img img {
  display: block;
  width: 24px;
  height: 24px;
  position: relative;
  left: 50%;
  top: 50%;
  margin-left: -12px;
  margin-top: -12px;
}
.cd-timeline-img.cd-picture {
  background: #75ce66;
}
.cd-timeline-img.cd-movie {
  background: #c03b44;
}
.cd-timeline-img.cd-location {
  background: #f0ca45;
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-img {
    width: 60px;
    height: 60px;
    left: 50%;
    margin-left: -30px;
    /* Force Hardware Acceleration in WebKit */
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
  .cssanimations .cd-timeline-img.is-hidden {
    visibility: hidden;
  }
  .cssanimations .cd-timeline-img.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-1 0.6s;
    -moz-animation: cd-bounce-1 0.6s;
    animation: cd-bounce-1 0.6s;
  }
}

.cd-timeline-content {
  position: relative;
  margin-left: 60px;
  background: white;
  border-radius: 0.25em;
  padding: 1em;
  box-shadow: 0 3px 0 #d7e4ed;
}
.cd-timeline-content:after {
  content: "";
  display: table;
  clear: both;
}
.cd-timeline-content h2 {
  color: #303e49;
}
.cd-timeline-content p, .cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
  font-size: 13px;
  font-size: 0.8125rem;
}
.cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
  display: inline-block;
}
.cd-timeline-content p {
  margin: 1em 0;
  line-height: 1.6;
}
.cd-timeline-content .cd-read-more {
  float: right;
  padding: .8em 1em;
  background: #acb7c0;
  color: white;
  border-radius: 0.25em;
}
.no-touch .cd-timeline-content .cd-read-more:hover {
  background-color: #bac4cb;  
}
a.cd-read-more:hover{text-decoration:none; background-color: #424242;  }
.cd-timeline-content .cd-date {
  float: left;
  padding: .8em 0;
  opacity: .7;
}
.cd-timeline-content::before {
  content: '';
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid white;
}
@media only screen and (min-width: 768px) {
  .cd-timeline-content h2 {
    font-size: 20px;
    font-size: 1.25rem;
  }
  .cd-timeline-content p {
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
    font-size: 14px;
    font-size: 0.875rem;
  }
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-content {
    margin-left: 0;
    padding: 1.6em;
    width: 45%;
  }
  .cd-timeline-content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: white;
  }
  .cd-timeline-content .cd-read-more {
    float: left;
  }
  .cd-timeline-content .cd-date {
    position: absolute;
    width: 100%;
    left: 122%;
    top: 6px;
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 24px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: white;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
    left: auto;
    right: 122%;
    text-align: right;
  }
  .cssanimations .cd-timeline-content.is-hidden {
    visibility: hidden;
  }
  .cssanimations .cd-timeline-content.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-2 0.6s;
    -moz-animation: cd-bounce-2 0.6s;
    animation: cd-bounce-2 0.6s;
  }
}

@media only screen and (min-width: 1170px) {
  /* inverse bounce effect on even content blocks */
  .cssanimations .cd-timeline-block:nth-child(even) .cd-timeline-content.bounce-in {
    -webkit-animation: cd-bounce-2-inverse 0.6s;
    -moz-animation: cd-bounce-2-inverse 0.6s;
    animation: cd-bounce-2-inverse 0.6s;
  }
}
</style>
