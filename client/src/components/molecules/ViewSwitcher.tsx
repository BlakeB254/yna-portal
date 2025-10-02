import { Grid, List, Calendar as CalendarIcon } from 'lucide-react';

export type ViewMode = 'grid' | 'list' | 'calendar';

interface ViewSwitcherProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export const ViewSwitcher = ({ currentView, onViewChange }: ViewSwitcherProps) => {
  const views: { mode: ViewMode; icon: typeof Grid; label: string }[] = [
    { mode: 'grid', icon: Grid, label: 'Grid' },
    { mode: 'list', icon: List, label: 'List' },
    { mode: 'calendar', icon: CalendarIcon, label: 'Calendar' },
  ];

  return (
    <div className="flex gap-2 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm">
      {views.map(({ mode, icon: Icon, label }) => (
        <button
          key={mode}
          onClick={() => onViewChange(mode)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200
            ${
              currentView === mode
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          aria-label={`${label} view`}
        >
          <Icon className="w-4 h-4" />
          <span className="text-sm font-medium">{label}</span>
        </button>
      ))}
    </div>
  );
};
