<template>
    <div class="col-md-12 pl-3 pr-3">
        <div class="card mb-3">
        <div class="d-flex flex-row mb-3">
            <button @click="redirect" class="btn btn-secondary btn-sm">
                Back 
            </button>
        </div>
            <form v-on:submit.prevent="updateEmployee">
                <div class="card-body">
                    <div class="container-fluid px-1 py-5 mx-auto">
                        <div class="row d-flex justify-content-center">
                            <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                                <h2 class="blue-text">Update Employee Information</h2>
                                <div v-if="errors">
                                    {{ errors }}
                                </div>
                                <div class="card">
                                    <form class="form-card">
                                        <div class="row justify-content-between text-left">
                                            <div class="form-group col-sm-6 flex-column d-flex"> 
                                                <label class="form-control-label px-3">Full name<span class="text-danger"> *</span></label>
                                                <input type="text" id="name" name="name" v-model="employee.name" placeholder="Enter your first name">
                                            </div>
                                            <div class="form-group col-sm-6 flex-column d-flex"> 
                                                <label class="form-control-label px-3">Email<span class="text-danger"> *</span></label>
                                                 <input type="text" id="email" name="email" v-model="employee.email" placeholder="Enter Your Email"> 
                                            </div>
                                        </div>
                                        <div class="row justify-content-between text-left">
                                            <div class="form-group col-sm-6 flex-column d-flex"> 
                                                <label class="form-control-label px-3">Phone number<span class="text-danger"> *</span></label>
                                                <input type="text" id="phone" name="phone" v-model="employee.phone" placeholder="Enter Your Phone Number"> 
                                            </div>
                                            <div class="form-group col-sm-6 flex-column d-flex"> 
                                                <label class="form-control-label px-3">Address<span class="text-danger"> *</span></label>
                                                <input type="text" id="address" name="address" v-model="employee.address" placeholder="Enter Your Email"> 
                                            </div>
                                        </div>
                                        <div class="row justify-content-start">
                                             <label class="form-control-label px-3">User Status<span class="text-danger"> *</span></label>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="employee_status" v-model="employee.status" id="inlineRadio1" value="true">
                                                <label class="form-check-label" for="inlineRadio1">Active</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="employee_status" v-model="employee.status" id="inlineRadio2" value="false">
                                                <label class="form-check-label" for="inlineRadio2">Not Active</label>
                                            </div>
                                        </div>
                                        <div class="row justify-content-end">
                                            <div class="form-group col-sm-6">
                                                <button type="submit" class="btn-block btn-primary">Update</button> 
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            employee: {},
            errors : null
        }
    },
    created() {
        fetch('http://localhost:3000/employees/' + this.id)
            .then((res) => res.json())
            .then((data) => (this.employee = data))
            .catch((err) => console.log(err.message));
    },
    methods: {
        updateEmployee() {
            fetch('http://localhost:3000/employees/' + this.id, requestOptions)
                .then(response => response.json())
            fetch('http://localhost:3000/employees/' + this.id, {
                method: 'PUT',
                body: JSON.stringify({
                    name: this.name,
                    email: this.email,
                    address: this.address,
                    status: this.status
                }),
                headers: {
                    'Content-type': 'application/json',
                },
            })
            .then((response) => {
                if (response.status == 200) {
                    this.$router.push('/');
                }
            })
            .catch((err) => this.error = err.message)
        },
        redirect() {
            this.$router.go(-1);
        }
    }
}
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

body {
    color: #000;overflow-x: 
    hidden;height: 100%;
    background-image: url("https://i.imgur.com/GMmCQHC.png");
    background-repeat: 
    no-repeat;background-size: 100% 100%
}

.card {
    padding: 30px 40px;
    margin-top: 60px;
    margin-bottom: 60px;
    border: none !important;
    box-shadow: 0 6px 12px 0 rgba(0,0,0,0.2)
}

.blue-text {
    color: #00BCD4
}

.form-control-label {
    margin-bottom: 0
} 

input, textarea, button {
    padding: 8px 15px;
    border-radius: 5px !important;
    margin: 5px 0px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    font-size: 18px !important;
    font-weight: 300 
}  

input:focus, textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #00BCD4;
    outline-width: 0;font-weight: 400
} 

.btn-block {
    text-transform: uppercase;font-size: 
    15px !important;font-weight:
    400;height: 43px;cursor: pointer
} 

.btn-block:hover {
    color: #fff !important
}  

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;outline-width: 0
}
</style>