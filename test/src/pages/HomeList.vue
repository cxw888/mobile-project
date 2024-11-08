<template>
    <div>
    <HeaderBox :username="username"></HeaderBox>
    <RecordColumn :practicetimes="practicetimes" :scenariocount="scenariocount" :totaltime="totaltime"></RecordColumn>
    <div class="title">
        选择陪练场景
    </div>
    <TrainList v-for="item in practice" :key="item.id" :item="item" >
    </TrainList>
    <div class="bottom">已显示全部内容</div>
</div>
</template>

<script>
import HeaderBox from '../components/HeaderBox.vue'
import RecordColumn from '../components/RecordColumn.vue'
import TrainList from '../components/TrainList.vue'


export default {
    name:'HomeList',
  components: { HeaderBox, RecordColumn, TrainList },

data() {
    return {
        username:'罗峰',
        practicetimes:1,
        scenariocount:2,
        totaltime:3,
        practice:[
            {id:1,theme:'金融：保险新品实战销售演练',content:'销售人员正在向周女士详细介绍保险产品的专属升级福利，但是周女士对于保险...',names:'王女士',gender:'女性',personnality:'对保险不熟悉持抵触态度，非常害怕被忽悠',own:'东亚银行客户经理 - 乐琛'},
            {id:2,theme:'老年客户—养老保险咨询',content:'销客户王奶奶是一位70岁的退休教师,对养老保险表现出浓厚兴趣，但同时也非常关心...',names:'王女士',gender:'女性',personnality:'对保险不熟悉持抵触态度，非常害怕被忽悠',own:'东亚银行客户经理 - 乐琛'},
            {id:3,theme:'老年客户—养老保险咨询',content:'销客户王奶奶是一位70岁的退休教师,对养老保险表现出浓厚兴趣，但同时也非常关心...',names:'王女士',gender:'女性',personnality:'对保险不熟悉持抵触态度，非常害怕被忽悠',own:'东亚银行客户经理 - 乐琛'}
        ]
    }
},

}
</script>

<style lang="less" >
  @baseSize: 3.9vw;

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
    font-size: (14/@baseSize);
    padding-bottom: env(safe-area-inset-bottom);
    font-family: "Helvetica Neue", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}



.title {
    margin: (20/@baseSize) (10/@baseSize) (20/@baseSize);
    color: white;
}


.bottom {
    margin-top: (19.5/@baseSize);
    text-align: center;
}
</style>