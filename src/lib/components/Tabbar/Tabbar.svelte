<!-- <svelte:options immutable={true} /> -->
<script context="module" lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { LocalizedString } from 'typesafe-i18n';
	import type { ITabbarItem } from 'types/navbar';
</script>

<script lang="ts">
	import TabbarItemComponent from './TabbarItem.svelte';

	export let routes: ITabbarItem[];
	export let paths: Record<string, () => LocalizedString>;

	const dispatch = createEventDispatcher();
</script>

<nav itemscope itemtype="https://schema.org/SiteNavigationElement">
	<div class="nav-container">
		{#each routes as { pathLabel, icon, href, size, rel, isActive, route } (href)}
			<TabbarItemComponent
				{icon}
				{href}
				{size}
				{rel}
				{isActive}
				title={paths[pathLabel]()}
				on:click={() => dispatch('click', route)}
			>
				<svelte:fragment slot="cart-badge">
					<slot />
				</svelte:fragment>

				{paths[pathLabel]()}
			</TabbarItemComponent>
		{/each}
	</div>
</nav>

<style lang="scss">
	@use 'variables' as *;

	nav {
		--bar-color: var(--body-bg2);

		display: flex;
		position: fixed;
		justify-content: center;
		height: 60px;
		width: 100%;
		bottom: 4px;
		z-index: 10;

		contain: layout;
		break-inside: avoid;
		content-visibility: visible;

		:global(.no-scroll) & {
			padding-right: var(--s-scroll-padding);
		}

		.nav-container {
			width: 98%;
			border-radius: 1em;
			background: var(--bar-color);

			display: flex;
			align-items: center;
			justify-content: space-around;
		}

		@media (min-width: map-get($map: $breakpoints, $key: md)) {
			display: none;
			content-visibility: hidden;
		}
	}
</style>
