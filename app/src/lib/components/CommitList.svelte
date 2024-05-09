<script lang="ts">
	import CommitListItem from './CommitListItem.svelte';
	import { getContextStore } from '$lib/utils/context';
	import {
		Branch,
		isLocalCommit,
		type AnyCommit,
		type Commit,
		type CommitStatus,
		type RemoteCommit
	} from '$lib/vbranches/types';

	export let type: CommitStatus;
	export let isUnapplied: boolean;
	export let commits: (Commit | RemoteCommit)[];

	const branch = getContextStore(Branch);

	$: headCommit = $branch.commits[0];
	$: hasCommits = commits && commits.length > 0;
	$: hasShadowColumn = commits.filter(isLocalCommit).some((c) => !!c.relatedTo);
	$: hasLocalColumn = commits.filter(isLocalCommit).length > 0;
</script>

{#if hasCommits}
	<div class="commit-list__content">
		<div class="title text-base-13 text-semibold">
			{#if type == 'local'}
				Local
			{:else if type == 'remote'}
				Local and remote
			{:else if type == 'upstream'}
				Remote upstream
			{/if}
		</div>
		<div class="commits">
			{#each commits as commit (commit.id)}
				<CommitListItem
					{commit}
					{isUnapplied}
					isHeadCommit={commit.id === headCommit?.id}
					{hasShadowColumn}
				/>
			{/each}
		</div>
	</div>
{/if}

<style lang="postcss">
	/* .commit-list {
		&.upstream {
			background-color: var(--clr-bg-2);
		}
		background-color: var(--clr-bg-1);
		display: flex;
		flex-direction: column;
		position: relative;
		flex-shrink: 0;
	} */
	.commit-list__content {
		display: flex;
		flex-direction: column;
		padding: 0 var(--size-14) var(--size-14) var(--size-14);
		gap: var(--size-8);
	}

	.commits {
		display: flex;
		flex-direction: column;
	}
</style>
