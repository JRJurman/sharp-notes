import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start } from 'tram-one'
import ColorHeader from './components/ColorHeader'
import NoteArea from './components/NoteArea'
import FilterNav from './components/FilterNav'
import './styles.scss'

const html = registerHtml({
	ColorHeader, NoteArea, FilterNav
})

const home = () => {
	return html`
    <div class="Home">
      <ColorHeader />
      <FilterNav />
			<NoteArea />
    </div>
  `
}

start('#app', home)
