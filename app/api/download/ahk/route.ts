import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import * as path from 'path'

export async function GET(request: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'downloads', 'poe-popup-helper-consolidated.ahk')
    const fileContent = await fs.readFile(filePath, 'utf8')
    
    return new Response(fileContent, {
      headers: {
        'Content-Type': 'text/plain',
        'Content-Disposition': 'attachment; filename="poe-popup-helper.ahk"'
      }
    })
  } catch (error) {
    console.error('Error reading AHK file:', error)
    return new Response('Error creating download', { status: 500 })
  }
}

