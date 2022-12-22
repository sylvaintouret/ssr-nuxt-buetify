<template>
  <div class="flex flex-col justify-center content-center items-center border-opacity-50  gap-2" style="min-height: 600px;">
    <component :is="errorPage" :error="error" />

    <NuxtLink to="/" class="btn gap-2"><Icon name="carbon:skip-back" size="1.75em"/>Home page</NuxtLink>
  </div>
</template>

<script>
import error403 from '~/components/error/403.vue';
import error404 from '~/components/error/404.vue';
import error500 from '~/components/error/500.vue';

definePageMeta({
  layout: "centerpage"
  })

export default {
  name: 'nuxt-error',
  layout: 'centerpage', // optional
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    errorPage() {

      if (this.error.statusCode == 404) {
        return error404;
      }
      if (this.error.statusCode == 403) {
        return error403;
      }
      // catch everything else
      return error500;
    },
}};
</script>