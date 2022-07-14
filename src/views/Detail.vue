<template>
	<div class="container" v-if="employee">
		<div class="main-body">
            <div class="d-flex flex-row mb-3">
                <router-link to="/">
                    <button class="btn btn-secondary btn-sm">
                        Back
                    </button>
                </router-link>
            </div>
			<div class="row gutters-sm">
				<div class="col-md-4 mb-3">
					<div class="card">
						<div class="card-body">
							<div
								class="d-flex flex-column align-items-center text-center"
							>
								<img
									src="https://bootdey.com/img/Content/avatar/avatar7.png"
									alt="Admin"
									class="rounded-circle"
									width="150"
								/>
								<div class="mt-3">
									<h4>{{ employee.name }}</h4>
									<p class="text-muted font-size-sm">
										{{ employee.address }}
									</p>
                                    <div v-if="!status">
                                        <div v-if="!employee.status">
									        <p class="text-muted font-size-sm">Not Active</p>
                                        </div>
                                        <div v-else>
									        <p class="text-muted font-size-sm">Active</p>
                                        </div>
                                    </div>
                                    <div v-else>
                                         <p class="text-muted font-size-sm">{{ status }}</p>
                                    </div>
									<button v-if="!employee.status" @click="activeUser" class="btn btn-primary btn-sm mr-2">
										Active
									</button>
                                    <button v-else @click="deactiveUser" class="btn btn-primary btn-sm mr-2">
										Deactive
									</button>
                                    <router-link :to="{ name: 'UpdateDetail', params:{ id: employee.id} }">
                                        <button class="btn btn-secondary btn-sm mr-2">
                                            Update
                                        </button>
                                    </router-link>
									<button @click="deleteEmployee" class="btn btn-danger btn-sm">Delete</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-8">
					<div class="card mb-3">
						<div class="card-body">
							<div class="row">
								<div class="col-sm-3">
									<h6 class="mb-0">Full Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									{{ employee.name }}
								</div>
							</div>
							<hr />
							<div class="row">
								<div class="col-sm-3">
									<h6 class="mb-0">Email</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									{{ employee.email }}
								</div>
							</div>
							<hr />
							<div class="row">
								<div class="col-sm-3">
									<h6 class="mb-0">Mobile</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									{{ employee.phone }}
								</div>
							</div>
							<hr />
							<div class="row">
								<div class="col-sm-3">
									<h6 class="mb-0">Address</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									{{ employee.address }},
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div v-else>Loading Data.....</div>
</template>

<script>
export default {
	props: ['id'],
	data() {
		return {
			employee: null,
            status: null
		};
	},
	mounted() {
		fetch('http://localhost:3000/employees/' + this.id)
			.then((res) => res.json())
			.then((data) => (this.employee = data))
			.catch((err) => console.log(err.message));
	},
    methods: {
        activeUser() {
            fetch('http://localhost:3000/employees/' + this.id, {
                method: 'PATCH',
                body: JSON.stringify({
                   status: true
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => {
                if (response.status == 200) {
                    this.$router.push('/');
                }
            })
            .then(this.status = "Active")
            .catch((err) => console.log(err.message))
        },
        deactiveUser() {
            fetch('http://localhost:3000/employees/' + this.id, {
                method: 'PATCH',
                body: JSON.stringify({
                   status: false
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => {
                if (response.status == 200) {
                    this.$router.push('/');
                }
            })
            .then(this.status = "Not Active")
            .catch((err) => console.log(err.message))
        },
        deleteEmployee() {
            fetch('http://localhost:3000/employees/' + this.id, {
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
    }
};
</script>
<style scoped>
body {
	margin-top: 20px;
	color: #1a202c;
	text-align: left;
	background-color: #e2e8f0;
}
.main-body {
	padding: 15px;
}

.card {
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card {
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-color: #fff;
	background-clip: border-box;
	border: 0 solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
}

.card-body {
	flex: 1 1 auto;
	min-height: 1px;
	padding: 1rem;
}

.gutters-sm {
	margin-right: -8px;
	margin-left: -8px;
}

.gutters-sm > .col,
.gutters-sm > [class*='col-'] {
	padding-right: 8px;
	padding-left: 8px;
}

.mb-3,
.my-3 {
	margin-bottom: 1rem !important;
}

.bg-gray-300 {
	background-color: #e2e8f0;
}

.h-100 {
	height: 100% !important;
}

.shadow-none {
	box-shadow: none !important;
}
</style>
