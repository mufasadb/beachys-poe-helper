import { Suspense } from 'react'
import PopupPageContent from './PopupPageContent'

export default function PopupPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </div>
    }>
      <PopupPageContent />
    </Suspense>
  )
}