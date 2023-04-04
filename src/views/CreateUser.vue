<template>
    <div class="w-full max-w-xs mx-auto">
        <FormUser></FormUser>
    </div>
</template>
<script>
import FormUser from "./FormUser.vue";

export default {
    name: "CreateForm",
    components: {
        FormUser,
    },
    // data() {
    //     return {
    //         errors: {
    //             name: "",
    //             email: "",
    //             password: "",
    //         },
    //         user: {
    //             name: "",
    //             email: "",
    //             password: "",
    //         },
    //     };
    // },
    // methods: {
    //     validate() {
    //         let isValid = true;

    //         this.errors = {
    //             name: "",
    //             email: "",
    //             password: "",
    //         };

    //         if (!this.user.name) {
    //             this.errors.name = "Name is required";
    //             isValid = false;
    //         }

    //         if (!this.user.email) {
    //             this.errors.email = "Email is required";
    //             isValid = false;
    //         }

    //         if (!this.user.password) {
    //             this.errors.password = "Password is required";
    //             isValid = false;
    //         }

    //         return isValid;
    //     },
    //     save() {
    //         if (this.validate()) {
    //             this.$request
    //                 .post("http://127.0.0.1:8000/api/user", this.user)
    //                 .then((res) => {
    //                     if (res.data.success) {
    //                         this.$router.push({ name: "home" });
    //                         return;
    //                     }

    //                     alert("Failed to create");
    //                 });
    //         }
    //     },
    // },
};
</script>
