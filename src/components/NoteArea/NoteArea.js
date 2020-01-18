import { registerHtml, useEffect } from 'tram-one'
import useNotes from '../../hooks/useNotes'
import './NoteArea.scss'

const html = registerHtml()

/**
 * Area for editing notes.
 * Notes edited here are saved in the note's queuedNote field.
 * A separate action must be taken to save the note.
 * We always load in the view the savedNote.
 */
export default () => {
	const { notes, selectedNote, updateNote, saveNote } = useNotes()
	const { savedNote } = notes[selectedNote] || {}

	useEffect(() => {

	})

	const onUpdateNote = event => {
		updateNote(event.target.value)
	}

	return html`
		<textarea class="NoteArea" rows="4" cols="50" oninput=${onUpdateNote} onblur=${saveNote}>
			${savedNote}
		</textarea>
	`
}
