<template>
  <div class="home">

   <header>
    <h1>Домашняя страница</h1>
    <h3>тестовое отборочное задание</h3>
   </header>
   
   <section>
    <h3 style="margin-bottom: 15px;"><strong>Разработать простое приложение таск-менеджера с использованием Vue 3,<br>
       включая работу с vuex или pinia и vue-router.</strong></h3>
    <ul class="wrapper_ul">
      <li>Приложение должно иметь главную страницу (на главной странице переход на страницу со списком задач, по желанию можете дать волю своей фантазии) и страницу со списком задач.</li>
      <li>На странице со списком задач должна быть форма создания задачи.</li>
      <li>Задачи можно удалить и отредактировать. При обновлении страницы должны отображаться сохранённые задачи.</li>
    </ul>
   </section>
    
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  components: {
    
  }
}
</script>

<style>
.home { 
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
}

.wrapper_ul {
  display: flex;
  flex-direction: column;
  justify-items: center;
  max-width: 500px;
  border: 2px solid #42b983;
  border-radius: 6px;
  padding: 20px 30px;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

li {
  all: unset;
  text-align: justify;
}
</style>
