
<template>
    <div v-if="toDoWork.isDone == true">
        <li :class="'editMode' ? justShowMode : false">
            <input v-if="justShowMode" type="checkbox" v-model="toDoWork.isDone" @change="changeStatus(toDoWork.id)">
            <label v-if="justShowMode">{{toDoWork.workToDo}}</label>
            <input v-if="onEditMode" type="text" v-model="toDoWork.workToDo">
            <button v-if="justShowMode" @click="changeToEditMode" class="edit">Edit</button>
            <button v-if="onEditMode" @click="saveEdits(toDoWork.id,toDoWork.workToDo)" class="apply">Apply</button>
            <button @click="deleteToDo(toDoWork.id)" class="delete">Delete</button>
        </li>
    </div>
</template>

<script>
export default{
    emits:['delete-todo','edit-toDo','changeStatus-toDo'],
    props:{
        toDoWork : {
            type:Object,
            required:true
        }
    },
    data() {
        return {
            onEditMode:false,
            justShowMode:true
        }
    },
    methods:{
        deleteToDo(id){
            this.$emit('delete-todo',id);
        },
        changeToEditMode(){
            this.justShowMode = false;
            this.onEditMode = true;
        },
        saveEdits(id,editedWork){
            this.$emit('edit-toDo',id,editedWork);
            this.justShowMode = true;
            this.onEditMode = false;
        },
        changeStatus(id){
            this.$emit('changeStatus-toDo',id,this.toDoWork.isDone);
            this.justShowMode = true;
            this.onEditMode = false;
        }
    }
}
</script>

<style>
</style>
