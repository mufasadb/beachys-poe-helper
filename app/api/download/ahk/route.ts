import { NextRequest, NextResponse } from 'next/server'
import * as fs from 'fs'
import * as path from 'path'

export async function GET(request: NextRequest) {
  try {
    const downloadsPath = path.join(process.cwd(), 'public', 'downloads')
    
    // List of files to include in the download
    const files = [
      'poe-popup-helper.ahk',
      'config.ahk', 
      'http.ahk',
      'popup.ahk',
      'cache.ahk',
      'README.txt'
    ]
    
    // Create a simple file list response for now
    // In production, you'd want to use a ZIP library like JSZip
    const fileList = []
    
    for (const filename of files) {
      const filePath = path.join(downloadsPath, filename)
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath)
        fileList.push({
          name: filename,
          size: stats.size,
          modified: stats.mtime.toISOString()
        })
      }
    }
    
    // For now, return file information
    // In production, implement actual ZIP download
    return NextResponse.json({
      files: fileList,
      totalFiles: fileList.length,
      downloadUrl: '/downloads/',
      instructions: 'Download individual files from /downloads/ folder',
      version: '1.0.0'
    })
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to prepare download' },
      { status: 500 }
    )
  }
}

// Alternative approach - serve individual files
export async function POST(request: NextRequest) {
  try {
    const { filename } = await request.json()
    
    if (!filename) {
      return NextResponse.json({ error: 'Filename required' }, { status: 400 })
    }
    
    const downloadsPath = path.join(process.cwd(), 'public', 'downloads')
    const filePath = path.join(downloadsPath, filename)
    
    // Security check - ensure file is in downloads directory
    if (!filePath.startsWith(downloadsPath)) {
      return NextResponse.json({ error: 'Invalid file path' }, { status: 400 })
    }
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const stats = fs.statSync(filePath)
    
    return NextResponse.json({
      filename,
      content: fileContent,
      size: stats.size,
      modified: stats.mtime.toISOString()
    })
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to read file' },
      { status: 500 }
    )
  }
}