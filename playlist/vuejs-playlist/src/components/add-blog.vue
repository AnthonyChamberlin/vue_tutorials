<template>
    <div id="add-blog">
        <h2>Add a new blog post</h2>
        <form>
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            
            <label>Blog Content:</label>
            <textarea v-model="blog.content"></textarea>
        </form>

        <h3>Preview</h3>

        <div id="preview">
            <h4>{{ blog.title }}</h4>
            <p>{{ blog.content }}</p>
        </div>
    </div>
</template>

<script>

export default {
    components: {
      
    },
    data () {
        return {
            blog: {
                title: "",
                content: "",
            },
        }
    },
    methods: {
    
    }
}
</script>

<style scoped>
#add-blog * {
    box-sizing: border-box;
}
#add-blog {
    margin: 20px auto;
    max-width: 500px;
}

#add-blog textarea {
    height: 450px;
}

label {
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea {
    display: block;
    width: 100%;
    padding: 8px;
}
#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3 {
    margin-top: 10px;
}
</style>
