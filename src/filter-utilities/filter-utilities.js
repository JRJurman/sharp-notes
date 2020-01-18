// 'This note is my first #test/note/filter I think it is great!' => '#test/note/filter'
export const parseNoteForHashes = note => note.match(/#(\S*)/g) || []

// #test/note/filter => ['test', 'note', 'filter']
export const parseHashForFilter = hashString => (hashString.split('#')[1] || '').split('/')

// ['test', 'note', 'filter'] => ['test', 'test/note', 'test/note/filter']
export const expandFilter = filter => filter.map((label, labelIndex) => filter.slice(0, labelIndex + 1).join('/'))

// 'This note is my first #test/note/filter' => ['test', 'test/note', 'test/note/filter']
export const parseNoteForExpandedFilter = note => {
	const hashes = parseNoteForHashes(note)
	const filters = hashes.map(parseHashForFilter)
	const expandedFilters = filters.flatMap(expandFilter)
	return expandedFilters
}
