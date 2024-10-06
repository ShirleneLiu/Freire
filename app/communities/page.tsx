"use client";

// page.tsx
import Tabs from '@/app/ui/communities/table';
import { communities } from '@/app/lib/data';



export default function Home() {
  return (
    <main className="flex-1 p-4 w-full bg-black text-white min-h-screen">
      <div>
        <Tabs communities={communities} />
      </div>
      
    </main>
  );
}
