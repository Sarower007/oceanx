// app/loading.tsx
export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin"></div>
        {/* Text */}
        <p className="text-gray-700 font-medium">Loading...</p>
      </div>
    </div>
  );
}
