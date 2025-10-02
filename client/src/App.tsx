import { useState } from 'react';
import { opportunities } from './data/opportunities';
import { useOpportunities } from './hooks/useOpportunities';
import { SearchBox, FilterBar, ViewSwitcher, ViewMode } from './components/molecules';
import { OpportunityGrid, FilterPanel, ListView, CalendarView } from './components/organisms';

function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('grid');

  const {
    searchQuery,
    setSearchQuery,
    selectedTracks,
    selectedTypes,
    savedOpportunities,
    filteredOpportunities,
    toggleTrack,
    toggleType,
    removeTrack,
    removeType,
    clearFilters,
    toggleSave,
  } = useOpportunities({ opportunities });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-heading font-bold text-gray-900 dark:text-white mb-2">
            YNA Portal - Opportunity Board
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Discover scholarships, competitions, and opportunities tailored to your track
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Filters */}
          <aside className="lg:col-span-1">
            <FilterPanel
              selectedTracks={selectedTracks}
              selectedTypes={selectedTypes}
              onTrackToggle={toggleTrack}
              onTypeToggle={toggleType}
            />
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search Box */}
            <SearchBox
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search by title, organization, or track..."
            />

            {/* Active Filters */}
            <FilterBar
              selectedTracks={selectedTracks}
              selectedTypes={selectedTypes}
              onRemoveTrack={removeTrack}
              onRemoveType={removeType}
              onClearAll={clearFilters}
            />

            {/* View Switcher & Results Count */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Showing {filteredOpportunities.length} of {opportunities.length} opportunities
              </p>
              <ViewSwitcher currentView={currentView} onViewChange={setCurrentView} />
            </div>

            {/* Opportunity Views */}
            {currentView === 'grid' && (
              <OpportunityGrid
                opportunities={filteredOpportunities}
                savedOpportunities={savedOpportunities}
                onSave={toggleSave}
              />
            )}
            {currentView === 'list' && (
              <ListView
                opportunities={filteredOpportunities}
                savedOpportunities={savedOpportunities}
                onSave={toggleSave}
              />
            )}
            {currentView === 'calendar' && (
              <CalendarView
                opportunities={filteredOpportunities}
                savedOpportunities={savedOpportunities}
                onSave={toggleSave}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
