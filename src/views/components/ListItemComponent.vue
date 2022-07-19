<template>
    <td>{{ employee.name }}</td>
    <td>{{ employee.email }}</td>
    <td>{{ employee.address }}</td>
    <td>{{ employee.phone }}</td>
    <td v-if="employee.status">Active</td>
    <td v-else>Not Active</td>
    <td class="d-flex flex-row">
        <div class="flex">
            <router-link :to="{ name: 'Detail', params: { id: employee.id } }">
                <button class="btn btn-primary btn-sm">Detail</button>
            </router-link>
            <button @click="deleteEmployee(employee.id)" class="btn btn-danger btn-sm ml-2">Delete</button>
        </div>
    </td>
</template>

<script>
export default {
    props:['employee'],
    methods: {
        deleteEmployee(employeeID) {
            fetch('http://localhost:3000/employees/' + employeeID, {
                method: 'DELETE',
            })
            .then((response) => {
                if (response.status == 200) {
                    this.$emit('itemchanged');
                    this.$router.push('/');
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>

<style>
.button {
    display: flex;
    justify-content: flex-end;
}
</style>