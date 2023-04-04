<template>
    <div class="w-full max-w-xs mx-auto">
        <FormUser></FormUser>
    </div>
</template>
<script>
import FormUser from "./FormUser.vue";

export default {
    name: "EditForm",
    components: {
        FormUser,
    },
};
</script>
