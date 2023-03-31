<template>
    <div class="w-full max-w-xs mx-auto">
        <form
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            @submit.prevent="save()"
        >
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
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
                />
            </div>
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
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
                />
            </div>
            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
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
                />
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 mr-2"
                    type="submit"
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
    </div>
</template>
<script>
export default {
    name: "CreateForm",
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: "",
            },
        };
    },
    methods: {
        validate() {
          
        },
        save() {
            console.log(this.user);
        },
    },
};
</script>
