<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import addBlog from './components/add-blog.vue';
import showBlogs from './components/show-blogs.vue';
import listBlogs from './components/list-blogs.vue';

export default {
    components: {
        'add-blog': addBlog,
        'show-blogs': showBlogs,
        'list-blogs': listBlogs,
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
    margin: 50px;
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    font-size: 18px;
    color: #202020;
}
</style>
