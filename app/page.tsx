"use client";

// page.tsx
import Tabs from '@/app/ui/communities/table';
import { communities } from '@/app/lib/data';


export default function Home() {
  return (
    <main className="flex-1 p-4 mt-16 w-full">
      <div>
        <Tabs communities={communities} />
      </div>
    </main>
  );
}
