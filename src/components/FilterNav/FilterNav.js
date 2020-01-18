import { registerHtml } from 'tram-one'
import useNotes from '../../hooks/useNotes'
import NavItem from '../NavItem'
import './FilterNav.scss'

const html = registerHtml({
	NavItem
})

export default () => {
	const { notes, selectFilter } = useNotes()

	const allFilters = notes.flatMap(note => note.filters)
	const uniqueFilters = [...new Set(allFilters)]

	// build list of links
	const filterLinks = uniqueFilters.map(filter => {
		const onSelectFilter = () => selectFilter(filter)
		const filterWithoutParent = filter.split('/').slice(-1)
		const filterLength = filter.split('/').length
		return html`<NavItem onclick=${onSelectFilter} indent=${filterLength / 2}>${filterWithoutParent}</NavItem>`
	})

	const onSelectAll = () => selectFilter('*')
	return html`
    <div class="FilterNav">
			<NavItem onclick=${onSelectAll}>All Notes</NavItem>
			${filterLinks}
    </div>
  `
}
