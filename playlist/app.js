new Vue({
    el: '#vue-app',
    data: { 
        name: 'Ant',
        job: 'Front-end Web Developer',
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ', ' + this.name + '!';
        }
    }
});