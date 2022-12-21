<template>
          
    <div class="relative ml-3">
              <div>
                <button 
                type="button" 
                class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" 
                id="user-menu-button" 
                @click="showMenu = !showMenu"
                aria-expanded="false" 
                aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" 
                  :src="user.picture ? user.picture : '/images/user.png'" 
                  alt="">
                </button>
              </div>

              <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
        <UserAnonMenu v-if="!user.loggedIn && showMenu"/>
        <UserConnectedMenu v-if="user.loggedIn && showMenu"/>
              
    </div>
</template>

<script setup lang="ts">
  const showMenu = useState('showMenu', () => false)
  const user = useCurrentUser();

</script>

