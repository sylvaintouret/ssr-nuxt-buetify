<template>

    <div class="mockup-code">
        <pre data-prefix="$"><code>403</code></pre> 
        <pre data-prefix=">" class="text-warning"><code>Forbidden</code></pre> 
        <pre data-prefix=">" class="text-success"><code>You need to log in to access this page</code></pre>
    </div>
            
</template>

<script>
export default {
  name: 'error-403',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
