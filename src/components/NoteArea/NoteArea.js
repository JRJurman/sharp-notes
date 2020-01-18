import { registerHtml } from 'tram-one'
import useNotes from '../../hooks/useNotes'
import './NoteArea.scss'

const html = registerHtml()

export default () => {
	const { notes, selectedNote, updateNote } = useNotes()
	const { savedNote } = notes[selectedNote] || {}
	const onUpdateNote = event => {
		updateNote(event.target.value)
	}

	return html`
		<textarea class="NoteArea" rows="4" cols="50" oninput=${onUpdateNote}>
			${savedNote}
		</textarea>
	`
}
