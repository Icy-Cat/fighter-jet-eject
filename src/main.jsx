import { createRoot } from 'react-dom/client'
import FighterJetEject from './components/fighter-jet-eject.tsx'
import defaults from './defaults.json'

createRoot(document.getElementById('root')).render(<FighterJetEject {...defaults} />)
