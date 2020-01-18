import { registerHtml } from 'tram-one'
import './Header.scss'

const html = registerHtml()

export default () => {
	return html`
    <div class="Header">
			<a href="/"><h1 class="Title">#SharpNotes</h1></a>
		</div>
  `
}
