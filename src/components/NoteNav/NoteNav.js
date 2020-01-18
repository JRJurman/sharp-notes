import { registerHtml } from 'tram-one'
import useNotes from '../../hooks/useNotes'
import NavItem from '../NavItem'
import './NoteNav.scss'

const html = registerHtml({
	NavItem
})

export default () => {
	const { notes, selectNote } = useNotes()
	const titles = notes.map(note => note.title)

	const titleNavItems = titles.map((title, noteIndex) => {
		const onSelectNote = () => selectNote(noteIndex)
		return html`<NavItem onclick=${onSelectNote}>${title}</NavItem>`
	})

	return html`
    <div class="NoteNav">
			${titleNavItems}
    </div>
  `
}
