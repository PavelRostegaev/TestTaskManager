<template>
    <div class="task_page">
      <h1>Страница с задачами</h1>
      <div class="sectionBtn">
        <ButtonMain
          @click="openModal"
        >+ Добавить задачу
        </ButtonMain>
        <ButtonMain
          @click="clearTasks"
        >Очистить задачи
        </ButtonMain>
      </div>
      
      <ModalComp
        :visibledModal="modalStatus"
        @newTasksEmit="addNewTask"
        @closeModal="() => modalStatus = false"
      >
        <TaskForm />
      </ModalComp>
      <TasksSection
        :tasks="tasks"
        @update-tasks="updateTasksInLocalStorage"
      />
    </div>

</template>
  
<script>
import ButtonMain from '@/components/UI/ButtonMain.vue'
import TasksSection from '@/components/TasksSection.vue'
import ModalComp from '@/components/ModalComp.vue'
import TaskForm from '@/components/TaskForm.vue'


export default {
  components: {
    ButtonMain, TasksSection, ModalComp, TaskForm
  },
  data() {
    return {
      modalStatus: false,
      tasks: [],
    };
  },
  created() {
    const tasksLocalStorage = localStorage.getItem('tasks');
    this.tasks = tasksLocalStorage ? JSON.parse(tasksLocalStorage) : [];
  },
  methods: {
    openModal() {
      this.modalStatus = true;
    },
    addNewTask(newTask) {
      this.tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(this.tasks)); 
      this.modalStatus = false;
    },
    clearTasks() {
      this.tasks = []; 
      localStorage.removeItem('tasks');
    },
    updateTasksInLocalStorage(updatedTasks) {
        this.tasks = updatedTasks;
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}
</script>
  
<style>
.task_page {
 display: flex;
 flex-direction: column;
 align-items: center;
}

.sectionBtn {
  display: flex;
  max-width: 400px;
  margin: 0 10px;
  padding: 0 10px;
  column-gap: 20px;
}
</style>