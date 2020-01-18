import { registerHtml } from 'tram-one'
import useNotes from '../../hooks/useNotes'
import NavItem from '../NavItem'
import './NoteNav.scss'

const html = registerHtml({
	NavItem
})

export default () => {
	const { notes, selectedFilter, selectNote } = useNotes()

	const noteHasFilter = note => note.filters.includes(selectedFilter) || selectedFilter === '*'

	const filteredNotes = notes.map(note => ({ ...note, display: noteHasFilter(note) }))

	const titleNavItems = filteredNotes.map((note, noteIndex) => {
		if (!note.display) return ''
		const onSelectNote = () => selectNote(noteIndex)
		return html`<NavItem onclick=${onSelectNote}>${note.title}</NavItem>`
	})

	return html`
    <div class="NoteNav">
			${titleNavItems}
    </div>
  `
}
