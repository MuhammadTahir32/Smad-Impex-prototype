import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 border-b border-olive-200">Navbar Placeholder</header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="p-4 border-t border-olive-200">Footer Placeholder</footer>
    </div>
  ),
})
