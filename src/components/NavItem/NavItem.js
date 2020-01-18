import { registerHtml } from 'tram-one'
import './NavItem.scss'

const html = registerHtml()

export default ({ indent, ...rest }, children) => {
	const navStyle = `
		${indent ? `padding-left: ${indent}em;` : ''}
	`
	return html`<button class="NavItem" style=${navStyle} ${rest}>${children}</button>`
}
