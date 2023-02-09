<template>
  <ul class=" flex flex-col gap-2 text-white">
    <li class="text-primary font-bold">
      <NuxtLink href="">
        Home
      </NuxtLink>
    </li>
    <li>
      <NuxtLink href="">
        Components
      </NuxtLink>
    </li>
    <li>
      <NuxtLink href="">
        Resources
      </NuxtLink>
    </li>
    <li>
      <NuxtLink href="">
        Contact Us
      </NuxtLink>
    </li>
    <li>
      <hr class="my-2 border-white/10">
      <span class="font-bold">
        Tools
      </span>
    </li>
    <li>
      <NuxtLink href="" class="ml-2">
        Border
      </NuxtLink>
    </li>
    <li>
      <NuxtLink href="" class="ml-2">
        Box Shadow
      </NuxtLink>
    </li>
    <li>
      <a href="" class="ml-2">
        Border Radius
      </a>
    </li>
    <li>
      <a href="" class="ml-2">
        RGB Colors
      </a>
    </li>
    <li>
      <hr class="my-2 border-white/10">
      <Menu
          as="div"
          class="static inline-block">
        <MenuButton
            class="rounded-md py-2"
            @click="isOpen = true"
        >

          <div
              class="flex justify-between items-center">
        <span>
        Borders
      </span>
            <Icon name="ion:md-arrow-dropdown" class="w-5 h-5" />
          </div>
        </MenuButton>

        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
              class="mt-1 ml-2 text-white"
              v-show="isOpen">

            <MenuItem class="flex flex-col text-dark lg:text-light">
              <span>
                hello
              </span>
            </MenuItem>


          </MenuItems>
        </transition>
      </Menu>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";
const isOpen = ref(false)
</script>