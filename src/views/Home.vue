<template>
    <div class="col-md-12">
        <h1>Employee Management System</h1>
        <div class="button">
            <button @click="createEmployee" class="btn btn-primary btn-sm">
                Create
            </button>
        </div>
        <list-view-component v-on:reloadlist="getEmployees()" :employees="employees"></list-view-component>
    </div>
</template>

<script>
import ListViewComponent from "./components/ListViewComponent"

export default {    
    components: {
        ListViewComponent
    },
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
