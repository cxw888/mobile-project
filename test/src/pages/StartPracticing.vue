<template>
  <div>
    <div class="header">
        <div class="title">
            <div class="tagmb-s">
                任务场景
            </div>
            <template>
                <div @click="stop"><el-button size="mini" round icon="el-icon-switch-button">结束</el-button></div>
            </template>
        </div>
        
        <div class="single-line">{{theme}}</div>
    </div>
    <div class="chat-list">
        <div class="pc"></div>
        <div class="content">
            <div class="name">
                {{names}}
            </div>
            <div class="content-audio-wrapper">
                <img src="../assets/wifi-blue.7f24edee.gif" alt="">
                <span>4"</span>
            </div>
            <div class="content-text">
                你们保险公司又想坑我钱？我已经买过保险了！
            </div>
        </div>
    </div>
   <div class="bottom"><i class="el-icon-microphone"></i>点击开始录音</div> 
    <div class="nova-btn" @click="hint"> <div><i class="el-icon-sunny"></i> 话术提示</div></div>
    <div class="tips-dialog" :style="divStyle">
      <div class="headericon">
        <div><i class="el-icon-sunny"></i> 话术提示 </div>
        <div @click="deletetips"> <i class="el-icon-close"></i></div> 
     </div>
        <div class="letter">
            <h3>角度一：资金安全保障</h3>
            <strong>回复示例：</strong>
            <p>王奶奶，您放心，我们的养老保险产品是由国家认可的保险公司承保的，受到严格的监管。保险公司会定期公布财务报告，您可以了解到公司的经营状况和资金运作情况。保险合同中有明确的保障条款，确保您的权益得到保障。</p>
        </div>
    </div>
     <div class="recording">
        
     </div>
</div>

</template>

<script>
export default {
name:'StartPracticing',
props:['theme','names'],
data() {
    return {
        divStyle: {
        display: 'none' // 初始值
      }
    }
},
methods: {
    hint(){
        this.divStyle.display = this.divStyle.display === 'block' ? 'none' : 'block';
    },
    deletetips(){
        this.divStyle.display='none'
    },
    stop(){
        this.$confirm('您将结束本次场景任务对话，并前往AI智能分析您的对话效果，看看本次对话的得分如何吧 ', '结束本次任务并前往评估', {
          confirmButtonText: '前往评估',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    
},
}
</script>
<style lang="less" scoped>
    @baseSize: 3.9vw;

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
    font-size: (14/@baseSize);
    padding-bottom: env(safe-area-inset-bottom);
    font-family: "Helvetica Neue", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
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
body {
    background-image: url(../assets/bg3.3f6b354c.jpg);
}

.header {
    margin: (10/@baseSize);
    padding: (10/@baseSize);
    background: rgba(0, 0, 0, .6);
    height: (80/@baseSize);
    border-radius: (12/@baseSize);
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .single-line {
        font-weight: 500;
        font-size: (16/@baseSize);
        color: white;
    }

    .title {
        margin: 2vw 2vw 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        height: (28/@baseSize);

        .tagmb-s {
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
    }
}

.chat-list {
    margin: (15/@baseSize) (10/@baseSize);
    height: (130/@baseSize);
    display: flex;
    gap: (10/@baseSize);


    .pc {
        width: (36/@baseSize);
        height: (36/@baseSize);
        background-size: cover;
        background: url(../assets/cover.aa799c19.png);
        border-radius: (200/@baseSize);
        background-size: 100% 100%;
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .name {
            font-size: (11/@baseSize);
            color: #fff;
        }

        .content-audio-wrapper {
            padding: (5/@baseSize);
            height: (36/@baseSize);
            width: (90/@baseSize);
            border-radius: 0 (12/@baseSize) (12/@baseSize) (12/@baseSize);
            background: white;
            display: flex;
            gap: (5/@baseSize);
            align-items: center;

            img {
                width: (20/@baseSize);
                height: (20/@baseSize);

            }

        }

        .content-text {
            height: (68/@baseSize);
            background: rgba(235, 236, 255, .94902);
            border-radius: (12/@baseSize);
            font-size: (16/@baseSize);
            padding: (10/@baseSize )(12/@baseSize);
            color: #222;
            font-weight: 400;
            display: flex;
            align-items: center;
        }
    }
}

.nova-btn {
    padding: 1.5vw 2.2vw;
    position: fixed;
    background-color: white;
    width: (100/@baseSize);
    height: (32/@baseSize);
    color: #707aff;
    left: (20/@baseSize);
    border: none;
    border-radius: (50/@baseSize);
    bottom: (70/@baseSize);
}

.tips-dialog {
    display: none;
    position: fixed;
    background-color: #fff;
    border-radius: (20/@baseSize);
    height: (200/@baseSize);
    color: #707aff;
    left: (10/@baseSize);
    bottom: (10/@baseSize);
    width: (370/@baseSize);
    padding: (20/@baseSize);
    .letter{
    overflow: auto;
    width: 80vw;
    height: 40vw;
    }
    .headericon{
        display: flex;
        justify-content: space-between;
    }
}
.recording{
    background-color: linear-gradient(247deg,rgba(92,103,255,.85098) 15.1%,rgba(226,112,255,.85098) 84.9%);
}
</style>