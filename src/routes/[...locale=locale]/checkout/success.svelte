<script lang="ts">
	import { onMount } from 'svelte';
	let sessionId: string | null = null;
	onMount(() => {
		const url = window?.location?.href ?? '';
		sessionId = new URL(url).searchParams.get('session_id');
	});
</script>

<h3>Checkout was a Succcess! {sessionId}</h3>

<style>
	/* your styles go here */
</style>
