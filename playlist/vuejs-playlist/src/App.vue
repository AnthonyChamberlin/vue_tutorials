<template>
    <div>
        <add-blog></add-blog>
    </div>
</template>

<script>
import addBlog from './components/add-blog.vue';

export default {
    components: {
        'add-blog': addBlog,
    },

    data () {
        return {
         
        }
    },

    methods: {
    
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Merriweather:300,400,700');
body {
    margin: 0;
    font-family: 'Merriweather', serif;
    font-size: 18px;
    color: #202020;
}
</style>
