import { registerHtml } from 'tram-one'
import { useNotes } from '../../hooks/useNotes'
import './FilterNav.scss'

const html = registerHtml()

export default () => {
	const { notes } = useNotes()
	const { folders } = notes[0]

	// remove duplicates
	const uniqueFolders = [...new Set(folders)]

	// build list of links
	const folderLinks = uniqueFolders.map(folder => {
		const folderWithoutParent = folder.split('/').slice(-1)
		const folderLength = folder.split('/').length
		return html`<div style="padding-left: ${folderLength / 2}em">${folderWithoutParent}</div>`
	})

	return html`
    <div class="FilterNav">
			${folderLinks}
    </div>
  `
}
