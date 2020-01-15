// 'This note is my first #test/note/folder I think it is great!' => '#test/note/folder'
export const parseNoteForHashes = note => note.match(/#(\S*)/g) || []

// #test/note/folder => ['test', 'note', 'folder']
export const parseHashForFolder = hashString => (hashString.split('#')[1] || '').split('/')

// ['test', 'note', 'folder'] => ['test', 'test/note', 'test/note/folder']
export const expandFolder = folder => folder.map((label, labelIndex) => folder.slice(0, labelIndex + 1).join('/'))

// 'This note is my first #test/note/folder' => ['test', 'test/note', 'test/note/folder']
export const parseNoteForExpandedFolder = note => {
	const hashes = parseNoteForHashes(note)
	const folders = hashes.map(parseHashForFolder)
	const expandedFolders = folders.flatMap(expandFolder)
	return expandedFolders
}
