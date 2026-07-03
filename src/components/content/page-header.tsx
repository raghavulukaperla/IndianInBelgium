import { BookmarkButton } from "@/components/interaction/bookmark-button";
import { ShareButton } from "@/components/interaction/share-button";
import { PrintButton } from "@/components/interaction/print-button";
import { CopyLinkButton } from "@/components/interaction/copy-link-button";
import { SampleDataBadge } from "./sample-data-badge";

interface PageHeaderProps {
  title: string;
  description: string;
  lastUpdated?: string;
  isSampleData?: boolean;
}

export function PageHeader({ title, description, lastUpdated, isSampleData }: PageHeaderProps) {
  return (
    <div className="border-b bg-gradient-to-b from-muted/50 to-transparent">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          {isSampleData && <SampleDataBadge />}
        </div>
        <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>
        <div className="mt-5 flex flex-wrap items-center gap-2 print:hidden">
          <BookmarkButton />
          <ShareButton title={title} />
          <CopyLinkButton />
          <PrintButton />
        </div>
        {lastUpdated && (
          <p className="mt-4 text-xs text-muted-foreground">Last updated: {lastUpdated}</p>
        )}
      </div>
    </div>
  );
}
