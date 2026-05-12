import { useEffect } from "react";

function Notification({ message, type, onClose }) {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      onClose();
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  const bgColor = type === "success" 
    ? "bg-green-600" 
    : "bg-red-600";

  return (
    <div className="fixed top-6 right-6 z-50 max-w-xs w-full">
      <div className={`${bgColor} text-white px-6 py-4 rounded shadow-lg border border-white/30 flex items-start gap-3`}>
        <div className="flex-1">
          <p className="font-medium tracking-wide">{message}</p>
        </div>
        <button 
          onClick={onClose}
          className="text-white/80 hover:text-white text-xl leading-none mt-0.5"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default Notification;