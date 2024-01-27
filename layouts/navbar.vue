<template>
  <div class="navbb backdrop-filter backdrop-blur-2xl rounded-none border-b-[1px] border-[#371f36]">
    <div class="w-full flex justify-between items-center py-4 px-8">
      <div class="flex items-end gap-2" dir="ltr">
        <h1 class="text-4xl font-semibold text-[#C147E9] ">KCODE</h1>
        <span class="text-2xl text-white">Generation</span>
      </div>

      <div class="flex items-center gap-6">
        <ButtonLang />
        <hr class="h-8 bg-white w-[1px] ">
        <NuxtLink
          to="https://github.com/rayanramazan">
        <Icon name="iconoir:github" class="w-[24px] h-[24px] text-white"/>
      </NuxtLink>
        
      </div>
    </div>
  </div>
</template>

<style>
@media (max-width: 1024px) {
  .navbb{
    display: none !important;
  }
}
.scrolled-nav{
  @apply backdrop-filter backdrop-blur-[500px] rounded-none;
}
</style>
