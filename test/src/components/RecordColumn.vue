<template>
  <div class="zhong">
        <div class="navigationbar">
            <div class="contet">
                <div class="tge">

                    <div class="leftt">
                        <!-- 使用 -->
                        <i class="el-icon-s-fold"></i>
                        <span>成长记录</span>
                    </div>

                <router-link class="rightt" to="/allrecord">
                    <span>所有练习记录</span>
                    <i class="el-icon-edit"></i>
                </router-link>
                <router-view></router-view>
                </div>
                <div class="content">
                    <div class="item">
                        <div class="number">{{practicetimes}}</div>
                        <div class="text">练习次数</div>
                    </div>
                    <div class="item">
                        <div class="number">{{scenariocount}}</div>
                        <div class="text">练习场景数</div>
                    </div>
                    <div class="item">
                        <div class="number">{{totaltime}}分钟</div>
                        <div class="text">总练习时间</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
props:['practicetimes','scenariocount','totaltime']
}
</script>
<style lang="less" scoped>
  @baseSize: 3.9vw;
    .zhong {
    /* box-sizing: border-box; */
    margin-right: (10/@baseSize);
    margin-left: (10/@baseSize);
    height: (117/@baseSize);

    .navigationbar {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: linear-gradient(48deg, rgb(226, 112, 255) 0%, rgb(91, 102, 255) 44%, rgb(16, 222, 139) 92%);
        border-radius: (10/@baseSize);
        padding: (1.95/@baseSize);

        .contet {
            height: (113.1/@baseSize);
            background-color: rgb(13, 15, 36);
            border-radius: (10/@baseSize);

            .tge {
                margin: 0 (10/@baseSize) 0;
                display: flex;
                height: (40/@baseSize);
                justify-content: space-between;

                .leftt {
                    color: white;
                    font-size: (17/@baseSize);
                    line-height: (40/@baseSize);
                    text-decoration: none;
                }

                .rightt {
                    color: white;
                    font-size: (13/@baseSize);
                    line-height: (40/@baseSize);
                    text-decoration: none;
                }
            }

            .content {
                margin: (10/@baseSize);
                display: flex;
                justify-content: space-around;

                .item {
                    width: (84.5/@baseSize);
                    height: (50/@baseSize);
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

                    /* 近似于1/3的100% */
                    .number {
                        margin-bottom: (10/@baseSize);
                        color: white;
                        font-weight: 600;
                        font-size: (20/@baseSize);
                    }

                    .text {
                        font-size: (13/@baseSize);
                    }

                }



            }
        }
    }
}
</style>