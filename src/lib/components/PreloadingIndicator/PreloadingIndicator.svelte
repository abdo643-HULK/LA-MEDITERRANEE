<script lang="ts">
	import { onMount } from 'svelte';

	let p = 0;
	let visible = false;

	onMount(() => {
		visible = true;

		setTimeout(next, 250);
		// next();
	});

	function next() {
		p += 0.1;
		const remaining = 1 - p;
		if (remaining > 0.15) setTimeout(next, 500 / remaining);
	}
</script>

{#if visible}
	<div class="progress-container">
		<div
			role="progressbar"
			class="progress"
			style="width: {p * 100}%"
			aria-valuenow={p * 100}
			aria-valuemin={0}
			aria-valuemax={0}
		/>
	</div>
{/if}

{#if p >= 0.4}
	<div class="fade" />
{/if}

<style>
	.progress-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 4px;
		z-index: 999;
	}

	.progress {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		/* background-color: #5cb85c; */
		background-color: var(--accent-color);
		transition: width 0.4s;
	}

	.fade {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.3);
		pointer-events: none;
		z-index: 998;
		animation: fade 0.4s;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
