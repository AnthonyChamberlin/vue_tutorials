new Vue({
    el: '#vue-app',
    data: {
        output: 'Your Fav Food'
    },
    methods: {
        readRefs: function() {
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.input.value;
        }
    },
    computed: {
      
    },
});
