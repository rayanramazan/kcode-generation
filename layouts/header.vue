<template>
  <div class="relative">
    <div class="w-full gap-4 items-start flex flex-row-reverse">
      <div class="w-full flex flex-col">
        <div class="py-4 flex justify-between fixed lg:justify-end items-center px-4 rounded-md w-full scroll" style="z-index: 999;">
          
          <div class="flex items-center gap-4">
            <button class="block lg:hidden" @click="isOpen = !isOpen">
              <Icon name="gg:menu-left" class="w-6 h-6 text-white"/>
            </button>
            <div 
            dir="ltr"
            class="flex lg:hidden justify-center items-end gap-1 text-2xl lg:text-3xl font-bold text-white">
            <span>
              KCODE
          </span>
          <span class="text-white font-normal text-sm mb-[1.1px]">
            Generation
          </span>
        </div>
      </div>
      
      
      <ButtonLang class="btn_lang" />
      
      
    </div>
    <slot />
  </div>
  
  <div
  style="z-index: 99999; opacity: 1 !important;"
  :class="isOpen ? 'active' : ''"
  class="w-70 left-4 top-18 invisible lg:visible sm:w-96 h-0 fixed duration-300 lg:static lg:h-auto overflow-hidden  lg:p-0 bg-primary lg:bg-transparent rounded-md lg:rounded-none border-1 lg:border-0 border-white/10 scrollbar-sidebar scrollbar scrollbar-track-[#202020]">
      <navbar class="fixed w-full" />
      <sidebar class="mt-4 lg:mt-20"/>
    </div>

  </div>
  </div>

</template>
<script setup lang="ts">
import sidebar from "~/layouts/sidebar.vue";
import Navbar from "~/layouts/navbar.vue";
const isOpen = ref(false)
const props = defineProps({
  toggle: {
    type: Boolean,
    default: false,
  },
})
const localeLanguage =  useState<string>('locale.setting')

window.addEventListener('scroll', () => {
  const scrollContainer = document.querySelector('.scroll');
  if (scrollContainer) {
    if (window.scrollY > 50) { // Adjust the scroll position value (100 in this example) to your preference
      scrollContainer.classList.add('scrolled');
    } else {
      scrollContainer.classList.remove('scrolled');
    }
  }
});
</script>
<style>
.active{
  @apply h-screen visible overflow-y-auto 
}
.head_social{
  @apply sm:flex hidden
}
.btn_lang{
  @apply lg:hidden block
}
.scrolled{
  @apply backdrop-filter backdrop-blur-2xl rounded-none
}
@media only screen and (min-width: 1024px) {
  .scroll{
    visibility: hidden;
  }
}


</style>
<style>
.scrollbar-sidebar::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-sidebar::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #371F36;
}
</style>