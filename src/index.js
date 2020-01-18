import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start } from 'tram-one'
import NoteArea from './components/NoteArea'
import FilterNav from './components/FilterNav'
import NoteNav from './components/NoteNav'
import { useIndexedNotes } from './hooks/useNotes'
import './styles.scss'

const html = registerHtml({
	NoteArea, FilterNav, NoteNav
})

const home = () => {
	useIndexedNotes()
	return html`
    <div class="Home">
      <FilterNav />
			<NoteArea />
			<NoteNav />
    </div>
  `
}

start('#app', home)
