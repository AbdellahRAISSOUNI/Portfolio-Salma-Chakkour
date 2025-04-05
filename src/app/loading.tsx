export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--dark-bg)]">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] opacity-20 blur-xl"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-[var(--accent)] animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-medium text-[var(--accent)]">SC</span>
        </div>
      </div>
    </div>
  );
} 