import { useGlobalObservable } from 'tram-one'
import { parseNoteForExpandedFolder } from '../../filter-utilities'
import mockNotes from './mockNotes'

// test with a single hook
export const useNotes = () => {
	const noteObjects = mockNotes.map(note => ({
		savedNote: note,
		queuedNote: note,
		folders: parseNoteForExpandedFolder(note)
	}))

	const [notes] = useGlobalObservable('notes', noteObjects)

	const updateNote = (noteIndex, newNote) => {
		notes[noteIndex].queuedNote = newNote
		notes[noteIndex].folders = parseNoteForExpandedFolder(newNote)
	}

	return { notes, updateNote }
}
