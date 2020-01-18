import { useGlobalObservable } from 'tram-one'
import { set } from 'idb-keyval'
import { NOTES_OBSERVABLE, NOTES_STORE_KEY, NOTES_SELECTED_NOTE, NOTES_SELECTED_FILTER } from './globalKeys'
import { objectToNote, noteToObject } from './noteObjectMapping'
import { newNote } from './defaultNotes'

export default () => {
	const [notes] = useGlobalObservable(NOTES_OBSERVABLE, [])
	const [selectedNote, selectNote] = useGlobalObservable(NOTES_SELECTED_NOTE, 0)
	const [selectedFilter, selectFilter] = useGlobalObservable(NOTES_SELECTED_FILTER, '*')

	const updateNote = newNote => {
		notes[selectedNote].queuedNote = newNote

		const newNoteObject = noteToObject(newNote)
		notes[selectedNote].title = newNoteObject.title
		notes[selectedNote].filters = newNoteObject.filters
	}

	const saveNote = async () => {
		notes[selectedNote].savedNote = notes[selectedNote].queuedNote
		const notesToSave = notes.map(objectToNote)
		await set(NOTES_STORE_KEY, notesToSave)
	}

	const deleteNote = async noteIndex => {
		// remove note from array
		notes.splice(noteIndex, 1)

		// save other notes back to the indexedDB
		const notesToSave = notes.map(objectToNote)
		await set(NOTES_STORE_KEY, notesToSave)
	}

	const createNewNote = () => {
		notes.push(noteToObject(newNote))
		selectNote(notes.length - 1)
	}

	return { notes, selectedNote, selectedFilter, updateNote, saveNote, deleteNote, createNewNote, selectNote, selectFilter }
}
