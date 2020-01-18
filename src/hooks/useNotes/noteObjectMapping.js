import { parseNoteForExpandedFilter } from '../../filter-utilities'

export const noteToObject = note => ({
	savedNote: note,
	queuedNote: note,
	title: note.substr(0, 7),
	filters: parseNoteForExpandedFilter(note)
})

export const objectToNote = noteObject => noteObject.savedNote

