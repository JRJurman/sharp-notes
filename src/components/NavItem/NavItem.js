import { registerHtml } from 'tram-one'
import './NavItem.scss'

const html = registerHtml()

/**
 * A single control in the Navigation Menus
 */
export default ({ indent, ...rest }, children) => {
	// allow items to have some "indent", to mimic a folder structure
	const navStyle = `
		${indent ? `padding-left: ${indent}em;` : ''}
	`
	return html`<button class="NavItem ${rest.className}" style=${navStyle} ${rest}>${children}</button>`
}
