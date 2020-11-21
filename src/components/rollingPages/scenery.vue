<template>
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide> </swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
    </swiper>
</template>
<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/swiper-bundle.css';
    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                swiperOption: {
                    direction: 'vertical',
                },
            };
        },
    };
</script>

<style lang="scss" scoped>
.swiper {
    width: 375px;
    height: 667px;
}
</style>


