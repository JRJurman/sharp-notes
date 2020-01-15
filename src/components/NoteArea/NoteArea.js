import { registerHtml } from 'tram-one'
import './NoteArea.scss'
import { useNotes } from '../../hooks/useNotes'

const html = registerHtml()

export default () => {
	// const { savedNotes } = useSavedNotes()
	// const { queuedNotes } = useQueuedNotes()
	// const note = savedNotes[0]
	// const onUpdateNote = event => {
	// 	// updateNote(0, event.target.value)
	// 	queuedNotes[0] = event.target.value
	// }

	const { notes, updateNote } = useNotes()
	const { savedNote } = notes[0]
	const onUpdateNote = event => {
		updateNote(0, event.target.value)
	}

	return html`
    <textarea class="NoteArea" rows="4" cols="50" oninput=${onUpdateNote}>
			${savedNote}
    </textarea>
  `
}
