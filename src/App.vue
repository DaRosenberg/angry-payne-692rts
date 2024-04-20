<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
	<div class="min-h-screen p-6 flex flex-col gap-6 max-w-3xl">
		<p>To reproduce issue, use the links below to navigate between the first and second view.</p>
		<p>Notice how the headlessui-portal-root element is present in the DOM on the view of the initial page load, and dialog opens fine on this view. When navigating to the other view, the headlessui-portal-root element disappears, the dialog does not open and the dialog component logs a console warning.</p>
		<div class="flex items-center gap-4 text-blue-600">
			<RouterLink :to="{ name: 'first' }">First</RouterLink>
			<RouterLink :to="{ name: 'second' }">Second</RouterLink>
		</div>
		<RouterView />
	</div>
</template>