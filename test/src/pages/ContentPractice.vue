<template>
  <div>
    <div class="top">
        <div class="tag">场景任务</div>
        <div class="title">{{theme}}</div>
        <div class="content">{{ content }}</div>
    </div>
    <div class="two">
        <div class="tag">陪练对象</div>
        <div class="contents">
            <div class="pc"></div>
            <div class="right">
                <div class="titles">
                    <span class="title">{{ names }}</span>
                    <span class="women">{{gender}}</span>
                </div>
                <div class="content">
                   {{ personnality }}
                </div>
            </div>
        </div>

    </div>
    <div class="three">
        <div class="tag">我的角色</div>
        <div class="contents">
            <div class="pc2"></div>
            <div class="titles">
                <span class="title">{{own}}</span>
            </div>
        </div>
    </div>
    <div class="four">
        <div class="get">
            <div class="tag">练习记录</div>
            <i class="el-icon-arrow-righ"></i>
        </div>
        <div class="con">
            <div class="item">
                <div class="number">{{practicetimes}}</div>
                <div class="text">练习次数</div>

            </div>
            <div class="item">
                <div class="number">{{totaltime}}分钟</div>
                <div class="text">练习时长</div>
            </div>
            <div class="item">
                <div class="number">{{number}}</div>
                <div class="text">最高分</div>
            </div>
            <div class="item">
                <div class="number">{{ranking }}</div>
                <div class="text">排名</div>
            </div>
        </div>

    </div>
   <div class="bottom" @click="ask(theme,names)"><i class="el-icon-microphone"></i>点击开始录音</div> 
  </div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
    name:'ContentPractice',
    props:['id','theme','content','names','gender','personnality','own'] ,
    data() {
        return {
            practicetimes:1,
            totaltime:3,
            number:4,
            ranking:5
        }
    },
    methods: {
        ask(theme,names){
            this.$router.push({
            path:'/startpracticing',
            query:{
            theme:theme,
            names:names
             } })
             const objj={id:nanoid(),names:names,theme:theme,times:'2024-10-13 14:57'}
             this.$store.commit('JIA',objj)
        }
    },
    
}
</script>
<style lang="less" scoped>
    * {
  box-sizing: border-box;
}
body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  background-image: url(../assets/bg3.3f6b354c.jpg);
  background-size: cover;
  color: #666;
  -webkit-text-size-adjust: 100%;
  font-size: 3.58974359vw;
  padding-bottom: env(safe-area-inset-bottom);
  font-family: "Helvetica Neue", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
@baseSize: 3.9vw;
.bottom {
    text-decoration: none;
    margin: 0 (10/@baseSize);
    width: (370/@baseSize);
    height: (48/@baseSize);
    line-height: (48/@baseSize);
    background: linear-gradient(247deg, #5c67ff 15.1%, #e270ff 84.9%), linear-gradient(90deg, #e270ff, #5c67ff);
    position: fixed;
    bottom: (10/@baseSize);
    padding: (12/@baseSize) (16/@baseSize);
    border-radius: (100/@baseSize);
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: (16/@baseSize);
    gap: (4/@baseSize);
    font-weight: 600;
    border: none;
    align-items: center;
    // background: linear-gradient(247deg, #5c67ff 15.1%, #e270ff 84.9%), linear-gradient(90deg, #e270ff, #5c67ff);
}
.top {
    background-color: rgba(0, 0, 0, .6);
    margin: (10/@baseSize);
    padding: (10/@baseSize);
    backdrop-filter: blur(4px);
    height: (172/@baseSize);
    border-radius: (15/@baseSize);
}

.tag {
    width: (56/@baseSize);
    height: (20/@baseSize);
    font-size: (12/@baseSize);
    line-height: (20/@baseSize);
    color: white;
    text-align: center;
    border-radius: (4/@baseSize);
    background: linear-gradient(237deg, #5c67ff 17.4%, #e270ff 87.02%), #707aff;
    margin-bottom: (20/@baseSize);
}

.title {
    font-size: (18/@baseSize);
    color: white;
    margin: (20/@baseSize) 0;
    margin-right: (10/@baseSize);
}

.content {
    color: #fff;
    font-size: (14/@baseSize);
    // 透明度
    opacity: .7;
    margin-top: (15/@baseSize);
}

.two {
    background-color: rgba(0, 0, 0, .6);
    margin: (10/@baseSize);
    padding: (10/@baseSize);
    backdrop-filter: blur(4px);
    height: (145/@baseSize);
    border-radius: (15/@baseSize);



    .pc {
        width: (48/@baseSize);
        height: (48/@baseSize);
        background-size: cover;
        background: url(../assets/cover.aa799c19.png);
        border-radius: (200/@baseSize);
        background-size: 100% 100%;
        margin-right: (10/@baseSize);
    }

    .right {
        width: (280/@baseSize);
        height: (73/@baseSize);

        .titles {
            .women {
                font-size: (12/@baseSize);
            }
        }
    }

}

.contents {
    width: (338/@baseSize);
    height: (73/@baseSize);
    display: flex;
    justify-content: start;
}

.three {
    background-color: rgba(0, 0, 0, .6);
    margin: (10/@baseSize);
    padding: (10/@baseSize);
    backdrop-filter: blur(4px);
    height: (122/@baseSize);
    border-radius: (15/@baseSize);

    .pc2 {
        width: (48/@baseSize);
        height: (48/@baseSize);
        background-size: cover;
        background: url(../assets/avatar-default.png);
        border-radius: (200/@baseSize);
        background-size: 100% 100%;
        margin-right: (10/@baseSize);
    }

    .titles {
        margin-bottom: (20/@baseSize);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}

.four {
    background-color: rgba(0, 0, 0, .6);
    margin: (10/@baseSize);
    padding: (10/@baseSize);
    backdrop-filter: blur(4px);
    height: (126/@baseSize);
    border-radius: (15/@baseSize);

    .get {
        display: flex;
        justify-content: space-between;
    }

    .con {
        display: flex;
        justify-content: space-around;

        .item {
            height: (52/@baseSize);
            width: (84.5/@baseSize);
            text-align: center;
            position: relative;

            &::after {
                content: "";
                /* 不需要内容，因为我们只想要线条 */
                position: absolute;
                /* 绝对定位以控制线条的位置 */
                top: 50%;
                /* 将线条垂直居中 */
                right: 0;
                /* 将线条放置在盒子右侧 */
                transform: translateY(-50%);
                /* 垂直方向上的微调，以确保线条完全居中 */
                border-right: 1px solid gray;
                /* 创建线条，颜色为灰色，宽度为1px */
                height: 50%;
                /* 如果希望线条贯穿整个盒子高度 */
                /* 或者可以设置一个具体的高度值 */
            }

        }

        .number {
            margin-bottom: (10/@baseSize);
            color: white;
            font-weight: 400;
            font-size: (20/@baseSize);


        }

        .text {
            font-size: (12/@baseSize);
            font-weight: 400;


        }


    }
}
</style>