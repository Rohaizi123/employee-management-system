<template>
	<div class="col-md-12">
		<h1>Employee Management System</h1>
            <div class="button">
                <button @click="createEmployee" class="btn btn-primary btn-sm">
                    Create
                </button>
            </div>
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
                <tr v-for="employee in employees" :key="employee.id" v-on:reloadlist="getEmployees()">
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
                            <button @click="deleteEmployee(employee.id)" class="btn btn-danger btn-sm ml-2" disabled>Delete</button>
                        </div>
                    </td>
                </tr>
            </table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			employees: {},
		};
	},
	created() {
		this.getEmployees();
	},
	methods: {
        getEmployees() {
            fetch('http://localhost:3000/employees')
            .then((res) => res.json())
            .then((data) => (this.employees = data))
        },
		createEmployee() {
			this.$router.push('/create');
		},
        deleteEmployee(employeeID) {
            fetch('http://localhost:3000/employees/' + employeeID, {
                method: 'DELETE',
            })
            .then((response) => {
                if (response.status == 200) {
                   this.$router.push('/');
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }
	},
};
</script>

<style scope>
.button {
    display: flex;
    justify-content: flex-end;
}
#table {
    width: 100%;
	margin-top: 10px;
	margin-bottom: 60px;
	margin-left: auto;
    margin-right: auto;
}
</style>
