<template>
    <div class="mx-auto min-h-screen bg-white dark:bg-black">
        <div class="container mx-auto pb-10" id="container_list">
            <div
                class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400"
                role="alert"
                v-if="check"
            ></div>

            <div
                class="table-responsive flex flex-col justify-center align-middle"
            >
                <img
                    alt="Vue logo"
                    src="../assets/logo.png"
                    width="200"
                    height="200"
                    class="mx-auto"
                />
                <table
                    class="border-collapse table-fixed border border-green-800"
                >
                    <thead>
                        <tr class="bg-emerald-200 dark:bg-green-700">
                            <th
                                class="w-1/12 border border-green-600 text-center dark:text-white border-emerald-300"
                            >
                                #
                            </th>
                            <th
                                class="w-1/3 border border-green-600 text-left dark:text-white border-emerald-300"
                            >
                                Name
                            </th>
                            <th
                                class="w-1/3 border border-green-600 text-left dark:text-white border-emerald-300"
                            >
                                Email
                            </th>
                            <th
                                class="w-1/4 border border-green-600 text-left dark:text-white border-emerald-300"
                            >
                                Created at
                            </th>
                            <th
                                class="w-1/6 border border-green-600 dark:text-white border-emerald-300"
                            ></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in users" :key="index">
                            <td
                                class="border border-green-600 text-center dark:text-white border-emerald-300"
                            >
                                {{ index + 1 }}
                            </td>
                            <td
                                class="border border-green-600 text-left dark:text-white border-emerald-300"
                            >
                                {{ user.name }}
                            </td>
                            <td
                                class="border border-green-600 text-left dark:text-white border-emerald-300"
                            >
                                {{ user.email }}
                            </td>
                            <td
                                class="border border-green-600 text-left dark:text-white border-emerald-300"
                            >
                                {{ formatTime(user.created_at) }}
                            </td>
                            <td class="border border-green-600 flex p-2">
                                <router-link
                                    class="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 mr-2"
                                    :to="{
                                        name: 'edit',
                                        params: { id: user.id },
                                    }"
                                >
                                    Edit
                                </router-link>
                                <button
                                    class="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2"
                                    @click="onDelete(user.id)"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    name: "userList",
    data() {
        return {
            users: [],
        };
    },
    created() {
        this.getAllUsers();
    },
    methods: {
        getAllUsers() {
            this.$request.get("http://127.0.0.1:8000/api/user").then((res) => {
                this.users = res.data.data.data;
            });
        },
        formatTime(time) {
            return moment(time).format("MMMM Do YYYY, h:mm:ss a");
        },
        onDelete(id) {
            this.$swal({
                title: "Delete user?",
                showCancelButton: true,
                confirmButtonText: "Yes",
                denyButtonText: "Cancel",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$request
                        .delete(`http://127.0.0.1:8000/api/user/${id}`)
                        .then((res) => {
                            if (res.data.success) {
                                this.$swal.fire("Deleted!", "", "success");
                                this.getAllUsers();
                            } else {
                                this.$swal.fire(
                                    "Something went wrong!!!",
                                    "",
                                    "info"
                                );
                            }
                        });
                }
            });
        },
    },
};
</script>

<style>
#container_list {
}
</style>
