<template>
  <div class="section" @click="scene(item)">
        <img src="../assets/cover.aa799c19.png" alt="">
        <div class="texts">
            <h3>{{item.theme}}</h3>
            <p>{{item.content}}</p>
        </div>

    </div>
</template>

<script>
export default {
props:['item'],
    methods: {
    scene(item){
    // 可以往后退
    this.$router.push({
    path:'/contentpractice',
      query:{
        id:item.id,
        theme:item.theme,
        content:item.content,
        names:item.names,
        gender:item.gender,
        personnality:item.personnality,
        own:item.own
      }
})
}
}
}
</script>

<style lang="less" scoped>
  @baseSize: 3.9vw;

    .section {
    margin: (15/@baseSize)(10/@baseSize) 0;
    background-color: rgba(2, 4, 10, .70196);
    display: flex;
    font-size: (15/@baseSize);
    border-radius: (10/@baseSize);
    padding: (18/@baseSize) (15/@baseSize)(15/@baseSize);
    justify-content: space-between;
    text-decoration: none;
    color: #666;


    img {
        width: (100/@baseSize);
        height: (100/@baseSize);
    }

    .texts {
        margin-left: (9.7/@baseSize);

        h3 {
            font-size: (15.6/@baseSize);
            color: white;
            margin: 0;
        }
    }

}
</style>