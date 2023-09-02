import { useEffect } from 'react'
import Accordion from './components/Accordion'
import Collapse from './components/Collapse'
import Dropdown from './components/Dropdown'
import MegaMenu from './components/MegaMenu'
import Modal from './components/Modal'
import Offcanvas from './components/Offcanvas'
import Popover from './components/Popover'
import RemoveElement from './components/RemoveElement'
import ScrollSpy from './components/ScrollSpy'
import Sidebar from './components/Sidebar'
import Tabs from './components/Tabs'
import Tooltip from './components/Tooltip'

function App() {
  useEffect(() => {
    import('preline')
  }, [])

  return (
    <div>
      <div className='mb-8'>
        <h2 className='mb-4'>Accordion</h2>
        <Accordion />
      </div>

      <div className='mb-8'>
        <h2 className='mb-4'>Collapse</h2>
        <Collapse />
      </div>

      <div className='mb-8'>
        <h2 className='mb-4'>Tabs</h2>
        <Tabs />
      </div>

      <div className='mb-8'>
        <h2 className='mb-4'>Scrollspy</h2>
        <ScrollSpy />
      </div>

      <div className='mb-8'>
        <h2 className='mb-4'>MegaMenu</h2>
        <MegaMenu />
      </div>

      <div className='mb-8'>
        <h2 className='mb-4'>Dropdown</h2>
        <Dropdown />
      </div>

      <div className='mb-8'>
        <h2 className='mb-4'>Modal</h2>
        <Modal />
      </div>

      <div className='mb-8'>
        <h2 className='mb-4'>Offcanvas</h2>
        <Offcanvas />
      </div>

      <div className='mb-8'>
        <h2 className='mb-4'>Sidebar</h2>
        <Sidebar />
      </div>

      <div className='mb-8'>
        <h2 className='mb-4'>Popover</h2>
        <Popover />
      </div>

      <div className='mb-8'>
        <h2 className='mb-4'>Tooltip</h2>
        <Tooltip />
      </div>

      <div className='mb-8'>
        <h2 className='mb-4'>RemoveElement</h2>
        <RemoveElement />
      </div>
    </div>
  )
}

export default App
