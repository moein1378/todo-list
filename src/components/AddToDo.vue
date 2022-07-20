<template>
  <div>
      <h3>Add Item</h3>
      <p>
        <input id="new-task" v-model="todoText" type="text"><button @click="addToDo()">Add</button>
      </p>
  </div>
</template>

<script>
export default{
    emits:['add-todo'],
    data() {
        return {
            todoText : ''
        }
    },
    methods: {
        addToDo(){
            this.$emit('add-todo',this.todoText);
            this.todoText = '';
        }
    },
}
</script>

<style>

</style>
