import { type MouseEventHandler } from 'react'

interface OverlayProps {
  handleOverlayClick: MouseEventHandler
  shouldOpen: boolean
}

function Overlay({ handleOverlayClick, shouldOpen }: OverlayProps) {
  return (
    <div
      onClick={handleOverlayClick}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#555',
        opacity: '0.5',
        transform: shouldOpen ? 'translateX(0%)' : 'translateX(100%)',
      }}
    ></div>
  )
}

export default Overlay
