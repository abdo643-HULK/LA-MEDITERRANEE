<script lang="ts">
	import SidebarContainer from './SidebarContainer.svelte';

	import type { MenuItem } from 'types/product';
	import Checkbox from 'svelty-material/components/Checkbox/Checkbox.svelte';
	import Radio from 'svelty-material/components/Radio/Radio.svelte';

	export let image: MenuItem['image'];
	export let id = 'product-aside-title';
</script>

<aside aria-labelledby={id}>
	<SidebarContainer>
		<div class="sidebar-img">
			<img src={image.src} alt={image.alt} />
		</div>
		<header class="info">
			<div class="header">
				<h1 {id} class="title">
					<slot />
				</h1>
				<div class="price">
					<slot name="price" />
				</div>
			</div>
			<slot name="description" />
		</header>
	</SidebarContainer>
</aside>

<style lang="scss">
	aside {
		// background-color: var(--accent-color, orange);
		background: var(--top2);
		border-radius: 0 0 1em 1em;
		padding: var(--product-modal-aside-padding);

		.sidebar-img {
			max-height: 350px;
			align-self: center;
			text-align: center;
		}

		img {
			width: 100%;
			height: auto;
			max-height: inherit;
			border-radius: 1em;
		}
	}

	.info {
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.6em 0 0.4em;
	}

	.title {
		font-size: 2em;
		flex: 0 1 auto;
		overflow-wrap: break-word;
		// span {
		// 	margin-inline-end: 0.5em;
		// }
	}

	.price {
		font-size: 1.5em;
		font-weight: 500;
		text-align: end;
		flex: 0 0 3.6em;
		margin-inline-start: auto;
	}

	.sidebar-container {
		display: flex;
		flex-direction: column;
		padding: var(--container-padding);
		// overflow: auto;
	}

	$modalBP: 850px;

	@media screen and (min-width: $modalBP) {
		:global(.s-dialog) {
			aside {
				border-radius: 0;
				border-start-end-radius: 1em;
				border-end-end-radius: 1em;
			}
		}

		aside {
			flex: 1 0 var(--aside-width);
			max-width: var(--aside-width);
			height: 100vh;
			position: sticky;
			top: 0;

			:global(.s-dialog) & {
				min-height: 100vh;
			}
		}

		.title {
			text-align: center;
		}
	}
</style>
