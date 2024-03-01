<template>
    <section class="wrapper_tasks">
        <h3>{{ tasks.length === 0 ? 'У вас пока нет задач' : 'Список ваших задач' }}</h3>
        <div v-for="(task, index) in tasks" :key="task.id" class="task">

            <div class="task_info">
                <p><strong>{{ index + 1 }}.</strong></p>
                <p :class="{'completed': task.completed}"><strong>{{ task.title }}</strong></p>
                <!-- <p><strong>{{ task.completed ? 'выполнено' : 'не выполнено' }}</strong></p> -->
                <!-- <ButtonMain style="margin-right: 0;" @click="toggleStatus(task)">{{ task.completed ? '✓' : '✖' }}</ButtonMain> -->
                <SwitchOn 
                    :completed="task.completed"
                    @toggle-status="toggleStatus(task)"
                />

            </div>
            
            <div class="section_buttons">
                
                <ButtonMain 
                    v-if="editingTask !== task.id" 
                    @click="startEdit(task)"
                    >Изменить
                </ButtonMain>
                <input 
                    class="input" 
                    v-if="editingTask === task.id" 
                    type="text" 
                    v-model="editingTitle" 
                />
                <ButtonMain 
                    v-if="editingTask === task.id" 
                    @click="saveEdit(task)"
                    >Сохранить
                </ButtonMain>
                <ButtonMain 
                    @click="deleteTask(task)"
                    v-if="editingTask !== task.id" 
                    >Удалить
                </ButtonMain>   
            </div>
        </div>
    </section>
</template>

<script>
import ButtonMain from '@/components/UI/ButtonMain.vue'
import SwitchOn from './UI/SwitchOn.vue';

export default {
    name: 'TasksSection',
    components: {
        ButtonMain, SwitchOn, 
    },
    props: {
        tasks: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            editingTask: null,
            editingTitle: null
        };
    },
    methods: {
        startEdit(task) {
            this.editingTask = task.id;
            this.editingTitle = task.title;
        },
        saveEdit(task) {
            task.title = this.editingTitle;
            this.editingTask = null;
            this.editingTitle = null;
            this.updateTasks()
        },
        deleteTask(task) {
            const index = this.tasks.findIndex(t => t.id === task.id);
            if (index !== -1) {
                this.tasks.splice(index, 1);
                this.updateTasks()
            }
        },
        toggleStatus(task) {
            task.completed = !task.completed;
            this.updateTasks();
            console.log(task);
        },
        updateTasks() {
        this.$emit('update-tasks', this.tasks);
        }
    }
}
</script>

<style scoped>
.wrapper_tasks {
    border-radius: 5px;
    margin: 0px 30px;
    padding: 20px 20px;
    display: flex;
    row-gap: 15px;
    width: 90%;
}

.task {
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    column-gap: 10px;
    box-shadow: 2px 2px 4px rgba(138, 138, 138, 0.5);
}

.completed {
    color: rgba(7, 0, 0, 0.493);
    text-decoration: line-through;
}

.input {
    all: unset;
    background: none;
    color: #088;
    display: block;
    width: 150px;
    text-align: center;
    margin: 10px auto;
    padding: 10px 10px;
    transition: all 0.3s;
    border: 1px solid rgba(0, 136, 136, 0.507);
    border-radius: 5px;
}

.task_info {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.section_buttons{
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    flex-wrap: wrap;
    max-width: 370px;
}
</style> 