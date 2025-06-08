import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />)
    
    const heading = screen.getByText("Beachy's POE Helper")
    expect(heading).toBeInTheDocument()
  })

  it('renders all feature cards', () => {
    render(<Home />)
    
    const features = [
      'AutoHotkey Scripts',
      'Build Lists',
      'Item Filters',
      'League Start Templates',
      'POE Dashboard',
      'Lab Layouts',
      'Community Resources'
    ]
    
    features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument()
    })
  })
})