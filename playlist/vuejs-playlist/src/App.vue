<template>
    <div>
        <div class="container">
            <div id="left-col">
                <add-blog></add-blog>
            </div>
            <div id="right-col">
                <show-blogs></show-blogs>
            </div>
        </div>
    </div>
</template>

<script>
import addBlog from './components/add-blog.vue';
import showBlogs from './components/show-blogs.vue';

export default {
    components: {
        'add-blog': addBlog,
        'show-blogs': showBlogs,
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

.container {
    position: relative;
    height: 100vh;
    width: 100%;
    display: inline-block;
}

#left-col {
    position: absolute;
    left: 0;
    width: 50%;
}
#right-col {
    position: absolute;
    right: 0;
    width: 50%;
}
</style>
