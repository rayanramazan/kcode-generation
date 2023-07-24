<template>
    <div class="mt-26 lg:mx-0 p-4">
        <span class="mt-8 mb-1 text-xl md:text-2xl text-white font-bold">
            {{ $t('QR-code-generator') }}
       </span>
       <p class="text-white/80 text-sm md:text-base">
            {{ $t('d-QR-code-generator') }}
        </p>
    
       <div class="flex flex-col mt-10">
        <div class="flex flex-col">
            <label for="url" class="text-white">
                {{ $t('URL') }}
            </label>
            <input 
                type="text"
                class="outline-none bg-transparent rounded-lg text-white border border-secondary/50 py-2 pl-3 pr-10"
                v-model="url"
                id="url"
            >
        </div>
    
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-3 mt-3 items-center">
            <div class="flex flex-col">
                <label for="size" class="text-white">
                    {{ $t('Size') }}
                </label>
                <input 
                    type="number" 
                    class="outline-none bg-transparent rounded-lg text-white border border-secondary/50 py-2 pl-3 pr-10"
                    v-model.number="qrCodeSize"
                    id="size"
                >
            </div>
    
            <div class="flex flex-col">
                <label for="color" class="text-white">
                    {{ $t('foreground-color-qr') }}
                </label>
                <div class="w-full flex justify-between bg-primary border-secondary/50 border rounded h-10">
                    <label
                        class="rounded"
                        for="color-border">
                        <input
                            v-model="qrCodeColor" id="color"
                            class="form-input w-24 h-full rounded bg-primary"
                            type="color"
                        >
    
                    </label>
                    <span class="text-white self-center px-2"> {{ qrCodeColor }} </span>
                </div>
            </div>
    
            <div class="flex flex-col">
                <label for="background" class="text-white">
                    {{ $t('background-color-qr') }}
                </label>
                <div class="w-full flex justify-between bg-primary border border-secondary/50 rounded h-10">
                    <label
                        class="rounded"
                        for="color-border">
                        <input
                            v-model="qrCodeBackground" id="background"
                            class="form-input w-24 h-full rounded bg-transparent"
                            type="color"
                        >
    
                    </label>
                    <span class="text-white self-center px-2"> {{ qrCodeBackground }} </span>
                </div>
            </div>
    
        </div>
    
        <div v-if="qrCodeImage" class="flex justify-center mt-10">
          <img :src="qrCodeImage" alt="QR code" class="rounded-lg border border-primary"/>
        </div>
    
       </div>

       <Footer />
    </div>
</template>

<script setup lang="ts">
import qrcode from 'qrcode'

const url = ref('')
    const qrCodeImage = ref('')
    const qrCodeBackground = ref('#241127')
    const qrCodeColor = ref('#C147E9')
    const qrCodeSize = ref(300)

    const generateQRCode = () => {
      const qrCodeOptions = {
        width: qrCodeSize.value,
        color: {
          dark: qrCodeColor.value,
          light: qrCodeBackground.value
        }
      }

      const qrCodeData = url.value
      qrcode.toDataURL(qrCodeData, qrCodeOptions, (err: any, url: string) => {
        if (err) {
          console.error(err)
          return
        }
        qrCodeImage.value = url
      })
    }

    watch(url, () => {
      generateQRCode()
    })

    watch(qrCodeColor, (newValue) => {
        if (qrCodeColor.value) {
            qrCodeColor.value = newValue
        }
        generateQRCode()
    })
    watch(qrCodeBackground, (newValue) => {
        if (qrCodeBackground.value) {
            qrCodeBackground.value = newValue
        }
        generateQRCode()
    })

    watch(qrCodeSize, (newValue) => {
        if (qrCodeSize.value) {
            qrCodeSize.value = newValue
        }
        generateQRCode()
    })
</script>