<template>
    <div class="home">
        <Start />
    </div>
</template>

<script>
    // @ is an alias to /src
    import Start from '@/components/pages/start.vue';

    export default {
        name: 'Home',
        components: {
            Start,
        },
    };
</script>
