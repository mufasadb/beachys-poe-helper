import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import * as path from 'path'

export async function GET(request: NextRequest) {
  try {
    const downloadsDir = path.join(process.cwd(), 'public', 'downloads')
    
    // List all available AHK files
    const files = await fs.readdir(downloadsDir)
    const ahkFiles = files.filter(file => file.endsWith('.ahk') || file.endsWith('.txt'))
    
    const fileList = ahkFiles.map(filename => ({
      name: filename,
      size: 0, // Could calculate actual size if needed
      description: getFileDescription(filename)
    }))
    
    return NextResponse.json({
      success: true,
      files: fileList,
      count: fileList.length
    })
  } catch (error) {
    console.error('Error listing AHK files:', error)
    return NextResponse.json(
      { success: false, error: 'Error creating download package' }, 
      { status: 500 }
    )
  }
}

function getFileDescription(filename: string): string {
  const descriptions: { [key: string]: string } = {
    'poe-popup-helper.ahk': 'Main popup script',
    'poe-popup-helper-consolidated.ahk': 'All-in-one popup script (recommended)',
    'config.ahk': 'Configuration module',
    'http.ahk': 'HTTP communication module', 
    'popup.ahk': 'Popup display module',
    'cache.ahk': 'Content caching module',
    'README.txt': 'Installation and usage guide'
  }
  
  return descriptions[filename] || 'AutoHotkey script file'
}

