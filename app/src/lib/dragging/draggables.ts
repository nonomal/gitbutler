import { get, type Readable } from 'svelte/store';
import type { AnyCommit, AnyFile, Commit, Hunk, RemoteCommit } from '../vbranches/types';

export function nonDraggable() {
	return {
		disabled: true,
		data: undefined
	};
}

export class DraggableSplitHunk {
	constructor(
		public readonly branchId: string,
		public readonly hunk: Hunk,
		public readonly getClaims: () => (boolean | null)[]
	) {}
}

export class DraggableHunk {
	constructor(
		public readonly branchId: string,
		public readonly hunk: Hunk
	) {}
}

export class DraggableFile {
	constructor(
		public readonly branchId: string,
		public file: AnyFile,
		public commit: AnyCommit | undefined,
		private selection: Readable<AnyFile[]> | undefined
	) {}

	get files(): AnyFile[] {
		const selection = this.selection ? get(this.selection) : undefined;
		if (selection && selection.length > 0) return selection;
		return [this.file];
	}
}

export class DraggableCommit {
	constructor(
		public readonly branchId: string,
		public readonly commit: Commit,
		public readonly isHeadCommit: boolean
	) {}
}

export class DraggableRemoteCommit {
	constructor(
		public readonly branchId: string,
		public readonly remoteCommit: RemoteCommit
	) {}
}
