<template>
    <div>
        <table id="table" class="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tr v-for="employee in employees" :key="employee.id">
                <list-item-component v-on:itemchanged="$emit('reloadlist')" :employee="employee"></list-item-component>
            </tr>
        </table>
  </div>
</template>

<script>
import ListItemComponent from './ListItemComponent.vue'
export default {
  components: { ListItemComponent },
  props:['employees']

}
</script>

<style>
#table {
    width: 100%;
	margin-top: 10px;
	margin-bottom: 60px;
	margin-left: auto;
    margin-right: auto;
}
</style>