<template>
 <div>
  <div class="block-title">
        练习记录{{ num }}
    </div>
    <div class="section" v-for="item in practice" :key="item.id">
        <div class="pc"><img src="../assets/cover.aa799c19.png"></div>
        <div class="practice-namec-line-clamp2">
            <div class="practice-name__status--text">
                <span class="practice-name__status">未完成</span>
                <div class="text">{{item.theme}}</div>
            </div>
            <div class="meta">
                <div class="itemtime">
                    <div>练习时间:{{ item.times }}</div>
                    <div class="time"></div>
                </div>
                <div class="still" @click="still(item)">
                    <span>继续练习</span>
                    <i class="el-icon-arrow-righ"></i>
                </div>
                
 
            </div>
        </div>
    </div>
 </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name:'AllRecord',
// data() {
//     return {
//         practice:[
//             { id:'001',theme:'医药：感冒药药品推介',times:'2024-10-13 14:57',names:'王女士'},
//             { id:'002',theme:'医药：图书推介',times:'2024-10-12 14:57',names:'刘女士'},
//             { id:'003',theme:'医药：运动推介',times:'2024-10-12 14:57',names:'陈女士'},
//             { id:'003',theme:'医药：运动推介',times:'2024-10-12 14:57',names:'李女士'},
//         ]
//     }
// },
computed:{
    // num(){
    //     return this.practice.length
    // }
...mapState(['practice'])

},
methods: {
  still(item){
    // 可以往后退
    this.$router.push({
    path:'/startpracticing',
      query:{
        theme:item.theme,
        names:item.names,
      }
  })
},
}}
</script>
<style lang="css" scoped >
  * {
  box-sizing: border-box;
}
body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  background-image: url(../assets/train-bg.78d6d843.jpg);
  background-size: cover;
  color: #666;
  -webkit-text-size-adjust: 100%;
  font-size: 3.58974359vw;
  padding-bottom: env(safe-area-inset-bottom);
  font-family: "Helvetica Neue", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}

.block-title {
  padding: 5.64102564vw 2.56410256vw 0 5.12820513vw;
  height: 11.79487179vw;
  font-size: 4.61538462vw;
  color: white;
}
.section {
  padding: 4.61538462vw 3.33333333vw 3.84615385vw 3.84615385vw;
  margin: 3.84615385vw 2.56410256vw 0;
  height: 26.66666667vw;
  background: rgba(2, 4, 10, 0.70196);
  display: flex;
  align-items: flex-start;
  gap: 2.56410256vw;
}
img{
    width: 16.41025641vw;
  height: 16.41025641vw;
}

.section .practice-namec-line-clamp2 {
  flex: 1;
  display: flex;
  height: 20vw;
  gap: 2.12820513vw;
  flex-direction: column;
}
.section .practice-namec-line-clamp2 .practice-name__status--text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.28205128vw;
  color: white;
  line-height: 1.5;
}
.section .practice-namec-line-clamp2 .practice-name__status--text span {
  height: 4.35897436vw;
  font-size: 2.56410256vw;
  border: 0.25641026vw solid #fff;
  border-radius: 1.28205128vw;
  padding: 0.25641026vw;
  color: #fff;
  font-weight: 400;
}
.section .practice-namec-line-clamp2 .practice-name__status--text .text {
  font-size: 4.35897436vw;
  font-weight: 600;
}
.section .practice-namec-line-clamp2 .meta {
    /* height: 8vw; */
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.section .practice-namec-line-clamp2 .meta .itemtime {
  color: #999;
  display: flex;
  font-size: 3.07692308vw;
  flex-direction: column;
  justify-content: space-around;
  /* gap: 0.51282051vw; */
}
.section .practice-namec-line-clamp2 .meta .still span {
  text-decoration: none;
  color: #a86cff;
  font-weight: 600;
  font-size: 3.07692308vw;
}
</style>
