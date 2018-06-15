new Vue({
    el: '#vue-app',
    data: { 
        name: 'Ant',
        job: 'Front-end Web Developer',
        website: 'https://www.antchamberlin.me',
        websiteTag: '<a href="https://www.antchamberlin.me">Portfolio Site</a>',
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ', ' + this.name + '!';
        }
    }
});