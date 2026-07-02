import React, { ReactNode } from 'react';

interface ArticleLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
  sidebarPosition?: 'left' | 'right';
}

export function ArticleLayout({ sidebar, children, sidebarPosition = 'right' }: ArticleLayoutProps) {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className={`flex flex-col gap-12 max-w-7xl mx-auto ${sidebarPosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        {/* Main Content Area */}
        <main className="flex-1 w-full min-w-0 pb-20">
          {children}
        </main>
        
        {/* Sticky Sidebar Area */}
        <aside className="hidden lg:block w-80 shrink-0">
          <div className="sticky top-32 space-y-8">
            {sidebar}
          </div>
        </aside>
      </div>
    </div>
  );
}
