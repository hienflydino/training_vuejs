<template>
    <form
        class="max-w-sm bg-white dark:bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto"
        @submit.prevent="save()"
    >
        <div
            class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400"
            role="alert"
            v-if="check"
        >
            <span class="font-medium">Success alert!</span> Change a few things
            up and try submitting again.
        </div>
        <div class="mb-4">
            <label
                class="block text-gray-700 dark:text-white text-sm font-bold mb-2 text-left"
                for="username"
            >
                Username
            </label>
            <input
                class="shadow appearance-none border border-green-600 rounded w-full py-2 px-3 text-green-600 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                v-model="user.name"
                @blur="validate()"
                v-bind:class="{ 'border-red-600': errors.name }"
            />
            <span class="text-red-600">{{ errors.name }}</span>
        </div>
        <div class="mb-4">
            <label
                class="block text-gray-700 dark:text-white text-sm font-bold mb-2 text-left"
                for="email"
            >
                Email
            </label>
            <input
                class="shadow appearance-none border border-green-600 rounded w-full py-2 px-3 text-green-600 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                v-model="user.email"
                @blur="validate()"
                v-bind:class="{ 'border-red-600': errors.email }"
            />
            <span class="text-red-600">{{ errors.email }}</span>
        </div>
        <div class="mb-6">
            <label
                class="block text-gray-700 dark:text-white text-sm font-bold mb-2 text-left"
                for="password"
            >
                Password
            </label>
            <input
                class="shadow appearance-none border border-green-600 rounded w-full py-2 px-3 text-green-600 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                v-model="user.password"
                @blur="validate()"
                v-bind:class="{ 'border-red-600': errors.password }"
            />
            <span class="text-red-600">{{ errors.password }}</span>
        </div>
        <div class="flex items-center justify-between">
            <button
                class="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 mr-2"
                type="submit"
                v-if="user.id"
            >
                Update
            </button>
            <button
                class="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 mr-2"
                type="submit"
                v-if="!user.id"
            >
                Create
            </button>
            <router-link
                to="/"
                class="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 ml-2"
            >
                Back
            </router-link>
        </div>
    </form>
</template>

<script>
export default {
    name: "FormUser",
    data() {
        return {
            errors: {
                name: "",
                email: "",
                password: "",
            },
            user: {
                name: "",
                email: "",
                password: "",
            },
            check: false,
        };
    },
    created() {
        let id = this.$route.params.id;

        if (id) {
            this.getUser(id);
        }
    },
    methods: {
        validate() {
            let isValid = true;

            this.errors = {
                name: "",
                email: "",
                password: "",
            };

            if (!this.user.name) {
                this.errors.name = "Name is required";
                isValid = false;
            }

            if (!this.user.email) {
                this.errors.email = "Email is required";
                isValid = false;
            }

            if (!this.user.password) {
                this.errors.password = "Password is required";
                isValid = false;
            }

            return isValid;
        },
        save() {
            if (this.validate()) {
                if (this.user.id) {
                    this.$request
                        .put(
                            `http://127.0.0.1:8000/api/user/${this.user.id}`,
                            this.user
                        )
                        .then((res) => {
                            if (res.data.success) {
                                this.$router.push({ name: "home" });
                                this.$swal.fire({
                                    title: "Edited Success!!",
                                    width: 600,
                                    padding: "3em",
                                    color: "#716add",
                                    background:
                                        "#fff url(https://media2.giphy.com/media/26xBPapqZgN5M1KrC/giphy.gif?cid=ecf05e47dj60c6vl8uvb8r6zwe6ixj0y6hl9pjgnr7tkkark&rid=giphy.gif&ct=g)",
                                    backdrop: `
                                        rgba(0,0,123,0.4)
                                        url("https://media2.giphy.com/media/GkD4U3VfiIbzcBhQNu/giphy.gif?cid=ecf05e472oe4m1yvqemu4ptyy6qg40a80fx6ydiyy8xp15kp&rid=giphy.gif&ct=g")
                                        left top
                                        no-repeat
                                    `,
                                });

                                return;
                            }

                            this.check = false;
                            alert("Failed to update");
                        });
                } else {
                    this.$request
                        .post("http://127.0.0.1:8000/api/user", this.user)
                        .then((res) => {
                            if (res.data.success) {
                                this.$router.push({
                                    name: "home",
                                });

                                this.$swal.fire({
                                    title: "Created Success!!",
                                    width: 600,
                                    padding: "3em",
                                    color: "#716add",
                                    background:
                                        "#fff url(https://media2.giphy.com/media/26xBPapqZgN5M1KrC/giphy.gif?cid=ecf05e47dj60c6vl8uvb8r6zwe6ixj0y6hl9pjgnr7tkkark&rid=giphy.gif&ct=g)",
                                    backdrop: `
                                        rgba(0,0,123,0.4)
                                        url("https://media2.giphy.com/media/GkD4U3VfiIbzcBhQNu/giphy.gif?cid=ecf05e472oe4m1yvqemu4ptyy6qg40a80fx6ydiyy8xp15kp&rid=giphy.gif&ct=g")
                                        left top
                                        no-repeat
                                    `,
                                });

                                return;
                            }

                            this.$swal.fire({
                                position: "top-end",
                                icon: "warning",
                                title: "Created fail!!",
                                showConfirmButton: false,
                                timer: 3000,
                            });
                        });
                }
            }
        },
        getUser(id) {
            this.$request
                .get(`http://127.0.0.1:8000/api/user/${id}`)
                .then((res) => {
                    console.log(res.data.data);
                    this.user = res.data.data;
                });
        },
    },
};
</script>
