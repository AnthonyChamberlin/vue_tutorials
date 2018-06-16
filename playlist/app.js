var data = {
    name: 'Yoshi'
}

Vue.component('greeting', {
    template: '<p>Hey there, i am {{ name }}. <button @click="changeName">Change Name</button></p>',
    data: function(){
        return data;
    },
    methods: {
        changeName: function() {
            this.name = 'Mario';
        }
    },
});

new Vue({
    el: '#vue-app-one',
    data: {
    
    },
    methods: {
    
    },
    computed: {
      
    },
});

new Vue({
    el: '#vue-app-two',
    data: { 
  
    },
    methods: {
    
    },
    computed: {
    
    },
});
