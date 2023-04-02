<template>



<transitionTimingFunction />

<transitionDelay />

<transitionDuration />

{{ transition }}
  </template>

  
  <script setup>

import transitionTimingFunction from '../components/transitions/transition-timing-function'
import transitionDelay from '~~/components/transitions/transition-delay.vue';
import transitionDuration from '~~/components/transitions/transition-duration.vue';

const transition = await useTransition();
  </script>
  