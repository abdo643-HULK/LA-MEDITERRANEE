<script lang="ts">
	import Ripple from 'svelty-material/actions/Ripple';

	let klass: string = '';
	export { klass as class };
	export let side: 'right' | 'left';
	export let value: 'prev' | 'next';
	export let scroll: (e: Event) => void;
	export let setKeyboardFocus: (e: FocusEvent) => void;
</script>

<button
	{value}
	type="button"
	class="s-btn carousel-nav-btn {klass}"
	class:left={side === 'left'}
	class:right={side === 'right'}
	use:Ripple
	on:focus={setKeyboardFocus}
	on:click={scroll}
>
	<slot />
</button>

<style lang="scss" global>
	.s-btn.carousel-nav-btn {
		opacity: 0;
		cursor: pointer;
		position: absolute;
		display: var(--carousel-nav-btn-display, flex);

		top: 50%;
		z-index: 5;
		padding: 0.5rem;
		font-size: 2.5vw;
		border-radius: 0.6rem;

		background: var(--accent-color);
		border: none;
		will-change: transform, opacity;
		transition: transform 0.1s ease-in-out, opacity 0.2s ease-out;

		&::before {
			z-index: 6;
		}

		&:focus-visible {
			transition: opacity 0.2s ease-in;
			transform: translate(0%, -50%);
		}

		:global(.carousel-container):hover & {
			transform: translate(0%, -50%);
		}

		&:focus-visible,
		:global(.carousel-container):hover & {
			opacity: 1;
		}
	}

	.left {
		left: 0;
		transform: translate(-150%, -50%);
		visibility: var(--_has-items-left, all);
		margin-left: 0.2em;
	}

	.right {
		right: 0;
		transform: translate(150%, -50%);
		visibility: var(--_has-items-right, all);
		margin-right: 0.2em;
	}
</style>
