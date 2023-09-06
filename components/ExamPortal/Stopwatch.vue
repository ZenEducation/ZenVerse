<template>
    <div class=" max-w-[15rem] border rounded-md">
        <div class="stopwatch ">
            <span>{{ formattedTime }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount ,watch } from 'vue';

const props = defineProps({
    initial: {
        type: Number,
        Default:0
    },
    max: {
        type: Number,
        Default : Infinity // one day in seconds
    }
})
console.log(props.initial);
const initialTime = props.initial || 0;
const elapsedTime = ref(initialTime * 1000);
let startTime = Date.now();
let interval;

const emit = defineEmits(["activate-next"]);


const formattedTime = computed(() => {
    const seconds = Math.floor(elapsedTime.value / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (props.max != Infinity) {
        
        const secondsMax = Math.floor(props.max);
        const minutesMax = Math.floor(secondsMax / 60);
        const remainingSecondsMax = secondsMax % 60;
        return `${Math.floor(minutes / 60)}:${minutes%60}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds} / ${Math.floor(minutesMax / 60)}:${minutesMax % 60}:${remainingSecondsMax < 10 ? '0' : ''}${remainingSecondsMax}`;
    }
    return `${Math.floor(minutes / 60)}:${minutes % 60}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

});



watch(() => props.initialTime, (newValue, oldValue) => {
    if (newValue !== oldValue) {
        // Reset the stopwatch when the initialTime prop changes
        elapsedTime.value = newValue || 0;
        startTime = Date.now();
    }
});

const emitted = ref(false);

const updateTime = () => {
    elapsedTime.value = Date.now() - startTime + initialTime * 1000;
    if (elapsedTime.value > props.max*1000 && !emitted.value) {
        emitted.value = true;
          emit("activate-next", {
            next: true,
          });
        clearInterval(interval);
    }
};

onMounted(() => {
    interval = setInterval(updateTime, 1000);
});

onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>

<style scoped>
.stopwatch {
    font-size: 1.5rem;
    text-align: center;
}
</style>
