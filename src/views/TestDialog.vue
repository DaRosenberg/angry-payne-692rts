<script setup lang="ts">
import { ref } from "vue";
import { Dialog, DialogPanel, DialogTitle, DialogDescription, } from "@headlessui/vue";

const isOpen = ref(false);

function setIsOpen(value: boolean)
{
	isOpen.value = value;
}
</script>

<template>
	<main>
		<button type="button" @click="setIsOpen(true)" class="p-2 bg-gray-200">Open dialog</button>
		<Dialog :open="isOpen" @close="setIsOpen" class="relative z-40">
			<div class="fixed inset-0 bg-black/50" aria-hidden="true" />
			<div class="fixed inset-0 flex w-screen items-center justify-center p-4">
				<DialogPanel class="w-full max-h-full shadow-lg rounded-md border border-gray-500 bg-white flex flex-col">
					<header class="border-b rounded-t-md p-6 bg-surface-header space-y-2">
						<DialogTitle class="text-base font-semibold">Title</DialogTitle>
						<DialogDescription>Description</DialogDescription>
					</header>
					<main class="relative overflow-y-scroll p-6 flex flex-col gap-4">
						<p>Some content</p>
						<div class="flex items-center gap-4">
							<button @click="setIsOpen(false)" class="w-32 p-2 bg-gray-200">OK</button>
							<button @click="setIsOpen(false)" class="w-32 p-2 bg-gray-200">Cancel</button>
						</div>
					</main>
				</DialogPanel>
			</div>
		</Dialog>
	</main>
</template>