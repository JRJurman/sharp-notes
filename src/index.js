import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start } from 'tram-one'
import ColorHeader from './components/ColorHeader'
import NoteArea from './components/NoteArea'
import FilterNav from './components/FilterNav'
import NoteNav from './components/NoteNav'
import AppControls from './components/AppControls'
import { useIndexedNotes } from './hooks/useNotes'
import './styles.scss'

const html = registerHtml({
	ColorHeader, NoteArea, FilterNav, NoteNav, AppControls
})

const home = () => {
	useIndexedNotes()
	return html`
    <div class="Home">
      <ColorHeader />
			<AppControls />
      <FilterNav />
			<NoteNav />
			<NoteArea />
    </div>
  `
}

start('#app', home)
