new Vue({
    el: '#vue-app',
    data: { name: 'Ant' },
    methods: {
        returnName: function() {
            return this.name;
        }
    }
});