webpackHotUpdate(0,{8:function(t,n){t.exports={data:function(){return{items:[],endpoint:"/api/v0/articles/"}},methods:{getAllPosts:function(){this.$http.get(this.endpoint).then(function(t){console.log(t)},function(t){})}},created:function(){this.getAllPosts()}}}});