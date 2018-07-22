<template>
    <div id="add-blog">
        <h2>Add a new blog post</h2>
        <form>
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            
            <label>Blog Content:</label>
            <textarea v-model="blog.content"></textarea>
            <div id="checkboxes">
                <label>Ninjas</label>
                <input type="checkbox" value="Ninjas" v-model="blog.categories" />
                <label>Wizards</label>
                <input type="checkbox" value="Wizards" v-model="blog.categories" />
                <label>Mario</label>
                <input type="checkbox" value="Mario" v-model="blog.categories" />
                <label>Cheese</label>
                <input type="checkbox" value="Cheese" v-model="blog.categories" /> 
            </div>
        </form>

        <h3>Preview</h3>

        <div id="preview">
            <h4>{{ blog.title }}</h4>
            <p>{{ blog.content }}</p>
            <ul>
                <li v-bind:v-for="category in blog.categories">{{ category }}</li>
            </ul>
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
                categories: [],
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
    height: 150px;
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

#checkboxes input {
    display: inline-block;
    margin-right: 10px;
}

#checkboxes label {
    display: inline-block;
}
</style>
