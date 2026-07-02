import type { ResourcePost } from '@/lib/resource-data';
import { TableOfContents } from './table-of-contents';
import { MessageSquare, Mail, Link2 } from 'lucide-react';

interface ArticleSidebarProps {
  post: ResourcePost;
}

export function ArticleSidebar({ post }: ArticleSidebarProps) {
  return (
    <div className="space-y-8">
      <TableOfContents />

      {/* Share Section */}
      <div className="rounded-2xl border border-border/80 bg-white p-6 shadow-sm">
        <div className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Share this article
        </div>
        <div className="flex gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/30 text-muted-foreground transition-colors hover:bg-[#103938] hover:text-white">
            <MessageSquare className="h-4 w-4" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/30 text-muted-foreground transition-colors hover:bg-[#103938] hover:text-white">
            <Mail className="h-4 w-4" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/30 text-muted-foreground transition-colors hover:bg-[#103938] hover:text-white">
            <Link2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Tags Section */}
      {post.tags.length > 0 && (
        <div className="rounded-2xl border border-border/80 bg-white p-6 shadow-sm">
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Tags
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="rounded-md bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
