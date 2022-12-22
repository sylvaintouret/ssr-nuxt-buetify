<template>
    
    <div class="mockup-code">
        <pre data-prefix="$"><code>404</code></pre> 
        <pre data-prefix=">" class="text-warning"><code>Page not found</code></pre> 
    </div>
            
</template>

<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

