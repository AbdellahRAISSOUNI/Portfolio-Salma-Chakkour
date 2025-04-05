import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--dark-bg)] grid-bg relative">
      <div className="absolute top-1/4 right-1/4 glow"></div>
      <div className="absolute bottom-1/4 left-1/4 glow glow-purple"></div>
      
      <div className="text-center relative z-10 glass p-12 rounded-xl border border-[var(--border)]">
        <h1 className="text-8xl font-bold mb-4">
          <span className="text-gradient">404</span>
        </h1>
        <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
        <p className="text-[var(--text-light)]/70 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name 
          changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="px-6 py-3 rounded-md bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-medium hover:shadow-lg hover:shadow-[var(--accent)]/20 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
} 