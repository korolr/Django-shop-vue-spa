<template lang="html">
    <div>
        <div v-for="item in items">
            <span> {{ item.id }} </span>
            <span> {{ item.created_at }} </span>
            <h3 href="{{ item.url }}"> {{ item.title }} </h3>
            <p> {{ item.announce }} </p>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                items: [],
                endpoint: '/api/v0/articles/'
            }
        },
        methods: {
        getAllPosts: function(){
            this.$http.get(this.endpoint).then(function(response){
            this.items = response.data
                       }, function(error){
                //error
            })
        }
    },
    created: function() {
        this.getAllPosts();
    }

   }

</script>

<style lang="sass">
    div
        font-size: 14px
        color: #525255
        text-align: center
</style>
