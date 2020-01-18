import { useGlobalObservable, useEffect } from 'tram-one'
import { get } from 'idb-keyval'
import { NOTES_OBSERVABLE, NOTES_STORE_KEY } from './globalKeys'
import { noteToObject } from './noteObjectMapping'
import { newNote } from './defaultNotes'

// hook that triggers fetch for indexedDB using idb-keyval
export default () => {
	const [notes] = useGlobalObservable(NOTES_OBSERVABLE, [])

	useEffect(async () => {
		const indexedNotes = await get(NOTES_STORE_KEY)
		const notesExist = indexedNotes !== undefined

		const noteObjects = notesExist ? indexedNotes.map(noteToObject) : [newNote].map(noteToObject)
		notes.push(...noteObjects)
	})
}
