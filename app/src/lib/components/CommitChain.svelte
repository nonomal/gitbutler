<script lang="ts">
	export let isFirst = false;
	export let isLast = false;
	export let relatedCommit = undefined;
	export let hasShadowColumn = false;
	export let hasLocalColumn = false;
	export let hasUpstreamChild = false;
</script>

<div class="commit-chains">
	{#if hasShadowColumn}
		<div class="shadow-column">
			{#if relatedCommit}
				<div class="shadow-marker"></div>
				<dic class="shadow-line"></dic>
			{/if}
		</div>
	{/if}
	<div class="remote-column"></div>
	{#if hasLocalColumn}
		<div class="local-column"></div>
	{/if}
</div>

<style lang="postcss">
	.commit-chains {
		display: flex;
		align-items: stretch;
	}
	.shadow-column,
	.remote-column,
	.local-column {
		position: relative;
	}

	.shadow-column {
		width: var(--size-16);
	}
	.shadow-line {
		position: absolute;
		height: 100%;
		width: var(--size-2);
		background-color: var(--clr-commit-shadow);
		left: 75%;
	}
	.shadow-marker {
		position: absolute;
		width: var(--size-10);
		height: var(--size-10);
		border-radius: 100%;
		background-color: var(--clr-commit-shadow);
		bottom: calc(var(--size-16) + var(--size-2));
		left: 50%;
	}

	.remote-column {
		width: var(--size-24);
	}

	.local-column {
		width: var(--size-16);
	}
</style>
