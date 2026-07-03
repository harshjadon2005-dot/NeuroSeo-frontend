import { ReactNode } from 'react';
import { Container } from '@/components/ui';

export function ResourceLayout({ children, sidebar }: { children: ReactNode; sidebar?: ReactNode }) {
  return (
    <section className="py-20 bg-muted/20">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          {/* Main Content (Grid & Featured) */}
          <div className="flex-1 w-full max-w-5xl">
            {children}
          </div>
          
          {/* Sidebar */}
          {sidebar && (
            <div className="w-full lg:w-[320px] xl:w-[380px] shrink-0">
              {sidebar}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
