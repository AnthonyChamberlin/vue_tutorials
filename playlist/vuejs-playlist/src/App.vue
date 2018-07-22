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
@import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700');
body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    font-weight: 100;
}
</style>
