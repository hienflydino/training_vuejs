<template>
    <div class="mx-auto min-h-screen bg-white dark:bg-black">
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
};
</script>
