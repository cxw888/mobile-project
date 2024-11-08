<template>
  <div class="top">
        <div class="header">
            <div class="pic"></div>
        </div>
        <div class="names">{{ username }}</div>
    </div>
</template>

<script>
export default {
name:'HeaderBox',
props:['username']
}
</script>
<style lang="less" scoped>
  @baseSize: 3.9vw;
    .top {
    margin: 0 (10/@baseSize);
    display: flex;
    justify-content: flex-start;
    height: (114/@baseSize);
    padding: (21/@baseSize) (15/@baseSize) (21/@baseSize) (21/@baseSize);

    .names {
        line-height: (72/@baseSize);
        text-indent: 1em;
        color: white;
        font-weight: 600;
        font-size: (20/@baseSize);
    }

    .header {
        width: (72/@baseSize);
        height: (72/@baseSize);
        border-radius: 50%;
        position: relative;
        background-image: linear-gradient(90deg, #e270ff, #5c67ff);

        .pic {
            position: absolute;
            top: (3.9/@baseSize);
            left: (3.9/@baseSize);
            width: (64/@baseSize);
            height: (64/@baseSize);
            border-radius: 50%;
            background-image: url(../assets/avatar-default.png);
            background-size: cover;

        }
    }
}

</style>