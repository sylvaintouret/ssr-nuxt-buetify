<script setup lang="ts">
const  { app }  = useAppConfig();
const items = useState('items', () => app.nav.items);
</script>
<script lang="ts">
import { navItem } from '~~/models/nav';
export default {
        computed: {
            itemsFiltered() : navItem[]{

                return items.value.filter(d => d.showNavigation === true).map(d =>{
                    d.active = (this.$route.path == d.to)
                    return d
                }) 
            }
        }
        
    }
    

</script>
<template>
    <div class="ml-10 flex items-baseline space-x-4">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
    
        <!-- <NuxtLink 
          v-for="(item, key) of itemsFiltered" 
          :key="key" :to="item.to"
          :class="item.active ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'"
          >{{ item.title }}
        </NuxtLink> -->
        
    </div>
</template>







