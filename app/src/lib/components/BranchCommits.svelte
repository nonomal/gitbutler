<script lang="ts">
	import CommitList from './CommitList.svelte';
	import CommitListFooter from './CommitListFooter.svelte';
	import { getLocalCommits, getRemoteCommits, getUnknownCommits } from '$lib/vbranches/contexts';

	export let isUnapplied: boolean;

	const localCommits = getLocalCommits();
	const remoteCommits = getRemoteCommits();
	const unknownCommits = getUnknownCommits();
</script>

{#if $unknownCommits && $unknownCommits.length > 0}
	<CommitList {isUnapplied} commits={$unknownCommits} type="upstream" />
{/if}
<CommitList {isUnapplied} type="local" commits={$localCommits} />
<CommitList {isUnapplied} type="remote" commits={$remoteCommits} />
<CommitListFooter
	type="local"
	{isUnapplied}
	hasCommits={$localCommits.length > 0 || $remoteCommits.length > 0}
></CommitListFooter>
