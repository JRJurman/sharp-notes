import { registerHtml } from 'tram-one'
import useNotes from '../../hooks/useNotes'
import NavItem from '../NavItem'
import './NoteNav.scss'

const html = registerHtml({
	NavItem
})

/**
 * Area for selecting a note to load in the NoteArea
 * Shows only notes that are in the selected filter
 */
export default () => {
	const { notes, selectedFilter, selectNote, saveNote, createNewNote } = useNotes()

	// function to verify the note is in the filter
	// if selectedFilter is '*' then all notes are allowed
	const noteHasFilter = note => (selectedFilter === '*' || note.filters.includes(selectedFilter))

	const titleNavItems = notes.map((note, noteIndex) => {
		// if the note does not have the filter, do not show it
		// NOTE: we do this check here so that noteIndex is preserved
		if (!noteHasFilter(note)) return ''

		const onSelectNote = async () => {
			// save existing note so we don't lose content
			await saveNote()

			selectNote(noteIndex)
		}

		return html`<NavItem onclick=${onSelectNote}>${note.queuedNote}</NavItem>`
	})

	return html`
    <div class="NoteNav">
			${titleNavItems}
			<NavItem class="NavAction" onclick=${createNewNote}>+</NavItem>
    </div>
  `
}
