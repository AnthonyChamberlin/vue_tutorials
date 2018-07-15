<template>
    <div>
        <keep-alive>
            <component v-bind:is="component"></component>
        </keep-alive>
        
        <button @click="component = 'form-one'">Form 1</button>
        <button @click="component = 'form-two'">Form 2</button>
    </div>
</template>

<script>
// Imports
import formOne from './components/form-one.vue';
import formTwo from './components/form-two.vue';

export default {
    components: {
        'form-one': formOne,
        'form-two': formTwo
    },
    data () {
        return {
            component: 'form-one'
        }
    },
    methods: {
        handleSubmit: function(){
            alert('thanks for submitting');
        }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}