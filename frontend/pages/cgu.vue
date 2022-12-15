<template>
    <section class="section">
        <div class="columns is-mobile">
            <card
                title="Conditions"
                icon="text-box"
            >
                
                <loremIpsum />
            </card>

        </div>
    </section>
</template>


<script>
import Card from '~/components/Card'
import LoremIpsum from '~/components/LoremIpsum'
export default {
  name: 'cgu',
  components: {
    Card,
    LoremIpsum
  },
  auth: 'guest'
}

</script>