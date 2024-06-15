import { computed, ref } from 'vue';
// const counter = ref(10);
// Con esto tendriamos  un estadop global de la aplicacion.
// Que quiere decir esto? que en cualquier lugar donde este el composable useCounter nos actulaizara el valor.
export const useCounter = (initialValue: number = 5) => {
    const counter = ref(initialValue)
  
  return {
    counter,
    squareCounter:computed(() => counter.value * counter.value),
  };
};
