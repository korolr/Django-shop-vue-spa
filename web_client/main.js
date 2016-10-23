import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

new Vue({
  el: '#app',
    data: {
        endpoint: '/api/v0/articles/'
    },
    methods: {
        getAllPosts: function(){
            this.$http.get(this.endpoint).then(function(respone){
                console.log(response);
            }, function(error){
                //error
            })
        }
    },
    created: function() {
        this.getAllPosts();
    },
  render: h => h(App)
})
