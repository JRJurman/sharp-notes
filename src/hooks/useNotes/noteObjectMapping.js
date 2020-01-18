import { parseNoteForExpandedFilter } from '../../filter-utilities'

export const noteToObject = note => ({
	savedNote: note,
	queuedNote: note,
	title: note.split('\n')[0].substr(0, 12),
	filters: parseNoteForExpandedFilter(note)
})

export const objectToNote = noteObject => noteObject.savedNote

