<template>
    <button class="btn">
        <strong><slot></slot></strong>
    </button>
</template>
    
<script>
export default {
    name: 'ButtonMain'
}
</script>

<style>
.btn{
  all: unset;
  background: #eee;
  color: #088;
  display: block;
  width: 150px;
  text-align: center;
  margin: 20px auto;
  padding: 10px 10px;
  transition: all 0.3s;
  border-radius: 5px;
}

.btn:hover{
  box-shadow: 0px -5px 0 #088 inset;
}

</style>