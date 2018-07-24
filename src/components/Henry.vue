<template>
    <div>
        <h1>Henry.vue</h1>
        <p>{{sayHello}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            message: "Henry.vue"
        }
    },
    beforeCreate(){
        console.log('Henry.vue  beforeCreate')
    },
    created(){
        console.log('Henry.vue  created')
    },
    computed:{
        sayHello:{
            get(){
                return 'sayHello 哈哈哈哈哈'
            },
            set(){}
        }
    }
}
</script>
