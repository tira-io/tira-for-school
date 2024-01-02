<template lang="">
    <div>

        <hl>This is my new Comopnent</hl>
    </div>
    <div>
        <v-btn @click = 'increaseCount'> Add 1</v-btn>
        <p>count is: {{count}} </p>
    </div>
</template>

<script>
export default {
    name: "new_component",

    data() {
        return {
            showHeadline: true,
            items:[
                {"value": "1"},
                {"value": "2"}
            ]
        }
    },
    methods: {
        increaseCount(){
            this.count++;
        }
    }
}
</script>
<style lang="">
    
</style>