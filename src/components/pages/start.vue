<template>
    <div>
        <div class="startpage" :style="indexPage === 0 ? 'visibility: visible;opacity: 1;' : 'visibility: hidden;opacity: 0;'">
            <img :src="zongziImg" class="icon" />
            <div class="loading"><div class="loading-content"></div></div>
            <span>这会是你印象中的重邮吗？</span>
        </div>
        <div class="welcomePage" :style="indexPage === 1 ? 'visibility: visible;opacity: 1;' : 'visibility: hidden;opacity: 0;'">
            <img class="main" :src="rockImg" />
            <router-link to="together" id="memories">开启回忆</router-link>
            <span class="prompt">“好多的故事都是从相遇那一刻开启”</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'start',
        data() {
            return {
                indexPage: 0,
                zongziImg: require('@/assets/zongzi-fall.png'),
                rockImg: require('@/assets/rock.png'),
            };
        },
        methods: {},
        mounted: function () {
            setTimeout(() => {
                document.querySelector('.loading-content').addEventListener('animationend', () => {
                    this.indexPage = 1;
                });
            }, 1000);
        },
    };
</script>

<style lang="scss" scoped>
.startpage {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: -1;
    background-color: rgb(31, 191, 163);
    overflow: hidden;
    text-align: center;
    transition: all 1s;
    .icon {
        width: 120px;
        height: 120px;
        margin-top: 110px;
    }
    .loading {
        width: 200px;
        height: 16px;
        background-color: rgb(33, 163, 139);
        border-radius: 9px;
        margin: 30px auto 0 auto;
        box-shadow: 1px 1px 1px 1px rgb(33, 163, 139);
        .loading-content {
            height: 16px;
            background-color: rgb(147, 224, 233);
            border-radius: 9px;
            animation: loading 3s ease-in-out;
        }
    }
    span {
        color: #fff;
        font-size: 16px;
        letter-spacing: 2px;
        display: inline-block;
        margin-top: 30px;
    }
}
@keyframes loading {
    from {
        width: 0px;
    }
    to {
        width: 200px;
    }
}
@keyframes launch {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(30px);
    }
}
.welcomePage {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 1;
    transition: all 1s;
    background-image: url('../../assets/welcome-background.png');
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
    text-align: center;
    .main {
        width: 153.81px;
        height: 323.07px;
        margin-top: 70px;
        animation: launch 1s ease-in-out 2s infinite alternate;
    }
    #memories {
        width: 201.39px;
        height: 41.67px;
        border: 0;
        outline: none;
        display: block;
        margin: 56.93px auto 0 auto;
        border-radius: 21px;
        font-size: 28px;
        letter-spacing: 5px;
        color: #2c397e;
        background: linear-gradient(145deg, #ffeb81, #e1c66d);
        box-shadow: 5px 5px 40px #d0b764, -5px -5px 40px #ffff8e;
    }
    #memories:active {
        border-radius: 21px;
        background: linear-gradient(145deg, #e1c66d, #ffeb81);
        box-shadow: 5px 5px 40px #d0b764, -5px -5px 40px #ffff8e;
    }
    .prompt {
        display: inline-block;
        margin-top: 124.19px;
        color: #2c397e;
        font-weight: bold;
    }
}
</style>