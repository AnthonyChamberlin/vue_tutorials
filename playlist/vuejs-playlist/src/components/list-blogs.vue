<template>
    <div id="show-blogs">
        <h1>List Blog Articles</h1>
        <input
            id="search-box"
            type="text"
            v-model="search"
            placeholder="Search blogs..."
        />
        <div v-for="blog in filteredBlogs" class="single-blog">
            <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
            <article>{{ blog.body }}</article>
        </div>
    </div>
</template>

<script>
import searchMixin from "../mixins/search-mixin";

export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },

    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,10);
        });
    },
    
    filters: {
        /*'to-uppercase': function(value){
            return value.toUpperCase();
        }*/
        toUppercase(value){
            return value.toUpperCase();
        }
    },

    directives: {
        'rainbow' :{
            bind(el, binding, vnode){
                el.style.color = "#" + Math.random().toString(16).slice(2, 8);
            }
        }
    },

    mixins: [searchMixin],
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

#search-box {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    font-family: 'lato';
    font-weight: 100;
}
</style>