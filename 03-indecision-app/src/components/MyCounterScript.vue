<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button class="p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2" @click="counter++">+1</button>
      <button class="p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2" @click="counter--">-1</button>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useCounter } from '@/composables/useCounter';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const { counter, squareCounter } = useCounter(props.value);
    // const counter  = ref (props.value);
    // const squareCounter = computed(() => counter.value * counter.value);
    return { counter, squareCounter };
  },
});

// import { computed, ref } from 'vue';
// // Modo de recibir props del padre en javascript
// // const props = defineProps({
// //   value: {type: Number, required: true}
// // });
// // Este seria el modo de definir props en typescript
// interface Props {
//   value: number;
// }
// // Si queremos que el value pueda ser opcional solo tenemos que poner value?:
// const props = defineProps<Props>();
// const counter = ref(props.value);
// const squareCounter = computed(() => counter.value * counter.value);
</script>
<!-- Si ponemos styled scooped el estilo solo afectara a este componente -->
