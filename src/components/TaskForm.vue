<template>
    <section>
       <h3>Создание задачи</h3> 
       <ButtonMain @click="createTask">Создать</ButtonMain>
    </section>
</template>
    
<script>
import ButtonMain from './UI/ButtonMain.vue';

export default {
    name: 'TaskForm',
    components: {
        ButtonMain
    },
}
    
</script>
    
<style>
    
</style>