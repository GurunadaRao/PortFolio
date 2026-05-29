import { useEffect, useState } from "react";
import { Check } from "lucide-react";

type ChecklistCellProps = {
  className?: string;
  initialCompleted?: number;
  finalCompleted?: number;
  stepInterval?: number;
  tasks: string[];
};

export function ChecklistCell({
  className = "",
  initialCompleted = 0,
  finalCompleted = 0,
  stepInterval = 700,
  tasks,
}: ChecklistCellProps) {
  const [completedCount, setCompletedCount] = useState(initialCompleted);

  useEffect(() => {
    if (completedCount >= finalCompleted) return;

    const interval = setInterval(() => {
      setCompletedCount((prev) => {
        const next = prev + 1;
        return next > finalCompleted ? finalCompleted : next;
      });
    }, stepInterval);

    return () => clearInterval(interval);
  }, [completedCount, finalCompleted, stepInterval]);

  return (
    <div className={`bg-white ${className}`}>
      <div className="space-y-3 p-6">
        {tasks.map((task, index) => {
          const isCompleted = index < completedCount;
          return (
            <div key={`${task}-${index}`} className="flex items-start gap-3">
              <div
                className={`mt-0.5 h-5 w-5 rounded border flex items-center justify-center transition-all duration-300 ${
                  isCompleted
                    ? "border-emerald-500 bg-emerald-500"
                    : "border-neutral-300 bg-neutral-50"
                }`}
              >
                {isCompleted && (
                  <Check size={16} className="text-white" strokeWidth={3} />
                )}
              </div>
              <span
                className={`text-sm font-medium transition-all duration-300 ${
                  isCompleted
                    ? "line-through text-neutral-500"
                    : "text-neutral-700"
                }`}
              >
                {task}
              </span>
            </div>
          );
        })}
      </div>

      <div className="border-t border-neutral-200 bg-neutral-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold tracking-[0.08em] uppercase text-neutral-600">
            Progress
          </span>
          <span className="text-sm font-semibold text-neutral-900">
            {completedCount} / {tasks.length}
          </span>
        </div>
        <div className="mt-3 h-2 w-full rounded-full bg-neutral-200 overflow-hidden">
          <div
            className="h-full bg-emerald-500 transition-all duration-300"
            style={{ width: `${(completedCount / tasks.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default ChecklistCell;
