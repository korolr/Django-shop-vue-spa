<template lang="html">
    <div>
        <h1> {{ items }} </h1>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                items: {}
            }
        },
        ready: function () {
                    var self = this;
            $.ajax({
                            url: '@Url.Action("GetItems", "Settings")',
                            method: 'GET',
                success: function (data) {
                                    self.Items = data;
                },
                error: function (error) {
                                    alert(JSON.stringify(error));
                }
            });
        }
    }

</script>

<style lang="sass">
    h1
        display: block
        position: absolute
        width: 100%
        height: 100px
        top: 50%
        margin: -50px 0 0 0
        font-size: 54px
        line-height: 64px
        font-weight: 300
        color: #525255
        text-align: center
</style>
