import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-display">Welcome to Smad Impex Prototype</h1>
      <p>This is the index page shell.</p>
    </div>
  )
}
