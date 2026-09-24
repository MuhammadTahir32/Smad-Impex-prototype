import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../components/layout/Navbar'

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <footer className="p-4 border-t border-olive-200">Footer Placeholder</footer>
    </div>
  ),
})

