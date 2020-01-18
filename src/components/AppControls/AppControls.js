import { registerHtml } from 'tram-one'
import useNotes from '../../hooks/useNotes'
import './AppControls.scss'

const html = registerHtml()

export default () => {
	const { saveNote, createNewNote } = useNotes()
	return html`
    <div class="AppControls">
			<button onclick=${saveNote}>Save Note</button>
			<button onclick=${createNewNote}>Create New Note</button>
    </div>
  `
}
