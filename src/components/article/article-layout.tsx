import React, { ReactNode } from 'react';

interface ArticleLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
  sidebarPosition?: 'left' | 'right';
}

export function ArticleLayout({ sidebar, children }: ArticleLayoutProps) {
  return (
    <div className="container mx-auto px-4 md:px-8 py-24 md:py-32">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-[1200px] mx-auto">
        {/* Left Sticky Sidebar */}
        <aside className="hidden lg:block w-[260px] shrink-0">
          <div className="sticky top-28 space-y-10">
            {sidebar}
          </div>
        </aside>

        {/* Right Main Content Area */}
        <main className="flex-1 min-w-0 pb-20">
          {children}
        </main>
      </div>
    </div>
  );
}
