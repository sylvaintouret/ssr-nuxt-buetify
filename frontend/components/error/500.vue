<template>

    <div class="mockup-code">
        <pre data-prefix="$"><code>500</code></pre> 
        <pre data-prefix=">" class="text-warning"><code>An error occurred</code></pre> 
        <pre data-prefix=">" class="text-success"><code>Oups. Something went wrong</code></pre>
    </div>
            
</template>

<script>
export default {
  name: 'error-500',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

