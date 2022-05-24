<template>
    <div class="col-md-12">
        <h1>Employee Management System</h1>
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
                <td>{{ employee.name }}</td>
                <td>{{ employee.email }}</td>
                <td>{{ employee.address }}</td>
                <td>{{ employee.phone }}</td>
                <td v-if="employee.status">Active</td>
                <td v-else>Not Active</td>
                <td class="d-flex flex-row">
                    <router-link :to="{ name: 'Detail', params:{ id: employee.id} }">
                        <button class="btn btn-primary btn-sm">Detail</button>
                    </router-link>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    data() {
        return {
            employees: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/employees')
            .then(res => res.json())
            .then(data => this.employees = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style scope>
#table {
	margin-top: 60px;
    margin-bottom: 60px;
    padding-right: 30px;
    padding-left: 30px;
}
</style>
