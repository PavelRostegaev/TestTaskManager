<template>
    <div 
        v-if="visibledModal" 
        @click.stop="hideModal"
        class="wrapper_modal"
    >
        <div 
            @click.stop
            class="modal"
        >
        <section>
            <h3>Создание задачи</h3> 
            <div class="inner">
                <input class="input" type="text" v-model="this.title">
                <ButtonMain @click="createTask">Создать</ButtonMain>
                <ButtonMain @click="() => this.$emit('closeModal')">Закрыть</ButtonMain>
            </div>
        </section>
        </div>
    </div>    
</template>
    
<script>
import ButtonMain from './UI/ButtonMain.vue';


export default {
    name: 'Modal',
    components: {
        ButtonMain, 
    },
    props: {
        visibledModal: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            title: '',
        }
    },
    methods: {
        createTask(){
            if (this.title) {
                    const newTask = {
                    id: Date.now(),
                    title: this.title,
                    completed: false,
                }
                this.$emit('newTasksEmit', newTask)
                this.title = ''
            }
        },
    }
}
</script>

    
<style>
.wrapper_modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #00000080;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 30;
}

.modal {
    padding: 15px;
    background-color: #ffffff;
    border-radius: 10px;
    min-width: 350px;  

}

.input {
  all: unset;
  background: none;
  color: #088;
  display: block;
  max-width: 350px;
  text-align: center;
  margin: 10px auto;
  padding: 10px 10px;
  transition: all 0.3s;
  border: 1px solid rgba(0, 136, 136, 0.507);
  border-radius: 5px;
}
</style>