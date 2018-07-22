<template>
    <div v-theme="'narrow'" id="show-blogs">
        <h1>All your posts</h1>

        <input
            id="search-box"
            type="text"
            v-model="search"
            placeholder="Search blogs..."
        />

        <div v-for="blog in filteredBlogs" class="single-blog">
            <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
            <article>{{ blog.body | snippet }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            blogs:[],
            search: "",
        }
    },

    methods: {
    
    },

    computed: {
        filteredBlogs: function(){
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            });
        },
    },

    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,10);
        });
    },
}
</script>

<style>
    #show-blogs {
        max-width: 800px;
        margin: 0 auto;
    }

    .single-blog {
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }

    #search-box {
        width: 100%;
        font-size: 18px;
        font-family: 'lato';
        font-weight: 100;
        padding: 10px;
    }
</style>
