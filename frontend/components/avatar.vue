<template>
    <div class="avatar placeholder">
        <div class="bg-neutral-focus text-neutral-content rounded-full w-10">
            <span>{{ user?.email[0]?.toUpperCase()}}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { User } from '~~/models/auth/user'

export interface Props {
    user : User,
    size? : number
}

const props = defineProps({
    user : User
})

</script>