<template>
    <div class="grid lg:grid-cols-2 gap-x-2 gap-y-3 mt-3">
        <div class="w-full">
            <div class="w-ful p-2 relative z-30">

                <Disclosure v-slot="{ open }">
                    <DisclosureButton
                        class="flex w-full justify-between rounded bg-[#222] border border-white/30 bg-[#222] text-white px-4 py-2 text-left text-sm font-medium hover:border-primary hover:text-primary duration-300 focus:outline-none">
                        <span>
                            Trackbar Properties
                        </span>
                        <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-primary duration-300" />
                    </DisclosureButton>
                    <DisclosurePanel class="p-3 flex flex-col gap-6 bg-[#222] border border-white/30 border-top-0 rounded">
                        
                        <div class="flex flex-col gap-1">
                            <span class="text-sm text-white">Background Color:</span>
                            <div class="w-full flex rounded h-10">
                                <label
                                    class="rounded"
                                    for="color-border">
                                    <input
                                        class="form-input w-24 h-full rounded bg-transparent"
                                        type="color"
                                    >

                                </label>
                                <span class="text-white self-center px-2"> #000000 </span>
                            </div>
                        </div>

                        <div class="flex flex-col gap-1">
                            <span class="text-sm text-white">Hover Color:</span>
                            <div class="w-full flex rounded h-10">
                                <label
                                    class="rounded"
                                    for="color-border">
                                    <input
                                        class="form-input w-24 h-full rounded bg-transparent"
                                        type="color"
                                    >

                                </label>
                                <span class="text-white self-center px-2"> #000000 </span>
                            </div>
                        </div>

                        <div class="flex flex-col gap-1">
                            <span class="text-sm text-white">Active Color:</span>
                            <div class="w-full flex rounded h-10">
                                <label
                                    class="rounded"
                                    for="color-border">
                                    <input
                                        class="form-input w-24 h-full rounded bg-transparent"
                                        type="color"
                                    >

                                </label>
                                <span class="text-white self-center px-2"> #000000 </span>
                            </div>
                        </div>

                        <div
                            class="w-full flex flex-col gap-2">
                        <span class="text-white">
                            Track Width
                        </span>
                        <input
                            class="rounded-lg overflow-hidden appearance-none bg-dark-100 h-3 w-full"
                            type="range"
                            min="0"
                            max="360"
                        />
                        </div>

                        <div
                            class="w-full flex flex-col gap-2">
                        <span class="text-white">
                            Track Radius
                        </span>
                        <input
                            class="rounded-lg overflow-hidden appearance-none bg-dark-100 h-3 w-full"
                            type="range"
                            min="0"
                            max="360"
                        />
                        </div>


                    </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" class="mt-2" v-slot="{ open }">
                    <DisclosureButton
                        class="flex w-full justify-between rounded bg-[#222] border border-white/30 bg-[#222] text-white px-4 py-2 text-left text-sm font-medium hover:border-primary hover:text-primary duration-300 focus:outline-none">
                        <span>
                            Thumb Properties
                        </span>
                        <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-primary duration-300" />
                    </DisclosureButton>
                    <DisclosurePanel class="p-3">
                        No.
                    </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" class="mt-2" v-slot="{ open }">
                    <DisclosureButton
                        class="flex w-full justify-between rounded bg-[#222] border border-white/30 bg-[#222] text-white px-4 py-2 text-left text-sm font-medium hover:border-primary hover:text-primary duration-300 focus:outline-none">
                        <span>
                            Border Properties
                        </span>
                        <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-primary duration-300" />
                    </DisclosureButton>
                    <DisclosurePanel class="p-3">
                        No.
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </div>

        <div class="h-96 overflow-y-scroll relative z-30 bg-[#222] text-white/70 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam aliquam error, temporibus labore
            ad, blanditiis neque sint rerum accusamus molestias minus, ut recusandae optio voluptatibus impedit veniam
            eveniet fugit. Perferendis ipsa modi aperiam repudiandae, ducimus voluptates commodi velit? Totam, officia
            nihil debitis fuga illum, hic quae est iste veritatis tempora commodi nisi eos quam perferendis officiis
            placeat. Quam nesciunt laboriosam natus eligendi fugit corporis, laudantium in impedit ullam architecto
            molestiae ea eius nihil quos. Velit cupiditate laborum labore corporis voluptas praesentium voluptates
            delectus expedita, eaque explicabo blanditiis dolore, sapiente veritatis reiciendis quos saepe ipsum! Iste
            quibusdam, nihil nobis dolor dolorum, vitae tenetur libero reiciendis mollitia fugiat odit. Dignissimos,
            deserunt magni quasi mollitia aspernatur voluptatem possimus ea laborum porro odio. Enim deleniti ut
            incidunt similique vel odio corporis pariatur, quae voluptates. Nam doloribus aliquid tempora quia, saepe
            labore commodi fugit esse. Pariatur, ratione vitae nostrum iusto temporibus exercitationem nam debitis
            nesciunt quidem! Voluptatem, hic laborum! Provident modi itaque aspernatur repudiandae. Voluptas beatae fuga
            molestiae accusamus dolorum nulla quam provident temporibus quibusdam velit aut odit suscipit natus sed,
            perspiciatis voluptatibus ducimus obcaecati eligendi iure harum. Nemo animi possimus labore sequi deleniti
            laborum sed earum corporis dolore? Voluptas totam numquam aspernatur, nobis ex ullam. Explicabo, mollitia
            numquam dolore nostrum ipsa voluptas ea perspiciatis labore voluptatibus deleniti, quaerat dolor illo cum
            maiores dolorum. Est, voluptates obcaecati, enim aliquid quaerat qui dolorum molestiae voluptatum dolor
            porro, nihil ea magni. Odio, vitae? Vero dolore aut nobis alias aliquid eius laudantium pariatur dignissimos
            enim? Voluptatum explicabo excepturi magni, eveniet reprehenderit amet libero suscipit ipsam blanditiis?
            Praesentium reiciendis repudiandae, nesciunt est accusamus sunt error nulla esse voluptatem nostrum ullam
            maxime magnam recusandae soluta unde, tempora ut beatae ea quam amet odio. Corporis perspiciatis, tempore
            facilis dicta vitae temporibus quod optio officia odit hic doloremque obcaecati quam suscipit. Labore amet
            at corporis rem voluptas alias nulla animi officiis enim harum iure voluptatem incidunt laboriosam soluta
            cumque delectus temporibus distinctio facere eos quasi, debitis in. Expedita dolorum, optio quis aut
            corporis omnis, ratione libero eaque adipisci totam ullam illo! Dolorem illo eius harum libero aspernatur
            aliquam non eaque iure enim accusantium id est, a eligendi, ipsum quas? Saepe magnam sit harum similique
            voluptatem consequatur adipisci tempora natus nulla rem quibusdam autem quod iusto aspernatur, illum quidem
            molestiae dolorem! Fugiat ea excepturi fuga nisi, repellendus adipisci explicabo minima ab illum tempore
            tenetur voluptatibus sequi incidunt ipsam distinctio modi nulla maxime? Possimus nam sint facere totam
            reprehenderit quo, temporibus quam natus ad pariatur accusamus officiis nobis laudantium, animi maiores
            dolores magnam voluptas, quos modi ipsa et minus. Exercitationem itaque ab earum ducimus. Dolore magni aut
            voluptates fugiat libero perspiciatis modi sunt ut iste. Vero itaque quia voluptates nobis vitae, maxime
            laboriosam eos quisquam fuga eligendi, velit eum, blanditiis tempora sequi eaque neque asperiores
            laudantium! Non quaerat itaque officia quam amet nam? Itaque dolor error eos ipsum eaque iure laboriosam
            quae enim, veritatis totam iusto est? Sit non beatae eos asperiores fuga a repellat. Numquam, delectus
            dolor. Nisi incidunt magni minima blanditiis praesentium facilis quasi ut soluta architecto, dicta natus
            ipsum et eligendi ratione totam iure libero explicabo deleniti sequi dolorem ipsam cumque est quia
            excepturi? Dicta maxime accusantium error laborum mollitia, debitis temporibus eaque exercitationem. Soluta
            eum inventore illum quasi culpa tenetur debitis amet veritatis, ab reprehenderit, minus nemo non atque
            voluptatibus modi eligendi velit ipsam rem officiis. Nesciunt quia reiciendis, obcaecati sit earum quaerat
            quos vel mollitia et officia quam aliquid nam? Aut pariatur accusamus explicabo, deserunt consequuntur,
            necessitatibus delectus ducimus assumenda rerum, vel praesentium perspiciatis aliquid reiciendis minus
            optio? Voluptates iusto animi hic, minus nihil deserunt! Id, tenetur nostrum.
        </div>
    </div>
</template>

<script setup lang="ts">
    import {
        Disclosure,
        DisclosureButton,
        DisclosurePanel
    } from '@headlessui/vue'
    import {
        ChevronUpIcon
    } from '@heroicons/vue/20/solid'
</script>