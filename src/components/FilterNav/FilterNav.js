import { registerHtml } from 'tram-one'
import useNotes from '../../hooks/useNotes'
import NavItem from '../NavItem'
import './FilterNav.scss'

const html = registerHtml({
	NavItem
})

/**
 * This component shows a list of filters for all notes.
 */
export default () => {
	const { notes, selectedFilter, selectFilter } = useNotes()

	// get a flat list of filters for all the notes
	const allFilters = notes.flatMap(note => note.filters)
	const uniqueFilters = [...new Set(allFilters)].sort()

	// build list of links
	const filterLinks = uniqueFilters.map(filter => {
		// if this is the selected filter, give it a class
		const isSelectedFilter = filter === selectedFilter
		const filterLinkClass = isSelectedFilter ? 'SelectedFilter' : ''

		const onSelectFilter = () => selectFilter(filter)
		const filterWithoutParent = filter.split('/').slice(-1)
		const filterLength = filter.split('/').length
		return html`<NavItem class=${filterLinkClass} onclick=${onSelectFilter} indent=${filterLength / 2}>${filterWithoutParent}</NavItem>`
	})

	// '*' is a special filter that shows all notes
	// for now we add a filter for 'All Notes' here,
	// but this could be a different control in the future
	const onSelectAll = () => selectFilter('*')

	return html`
    <div class="FilterNav">
			Filters
			<NavItem onclick=${onSelectAll}>All Notes</NavItem>
			${filterLinks}
    </div>
  `
}
