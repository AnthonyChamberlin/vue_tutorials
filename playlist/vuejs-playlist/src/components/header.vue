<template>
    <nav>
        <ul>
            <li><router-link to="/" exact>My Blogs</router-link></li>
            <li><router-link to="/add" exact>Create Blog</router-link></li>
        </ul>
    </nav>
</template>

<style>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 24px 0;
    margin-bottom: 60px;
    box-shadow: 0 1px 5px #282828;
}
.router-link-active{
    background: #eee;
    color: #444;
    padding: 5px 25px;
    margin: 100px;
}
</style>

<script>
export default {
    
}
</script>
