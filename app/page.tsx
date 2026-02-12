'use client';

import { useState } from 'react';
import { Page1 } from '@/components/pages/Page1';
import { Page2 } from '@/components/pages/Page2';
import { Page3 } from '@/components/pages/Page3';
import { Page4 } from '@/components/pages/Page4';

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleReset = () => {
    setCurrentPage(1);
  };

  return (
    <main className="relative w-full h-screen">
      {currentPage === 1 && <Page1 onNext={handleNextPage} />}
      {currentPage === 2 && <Page2 onNext={handleNextPage} />}
      {currentPage === 3 && <Page3 onNext={handleNextPage} />}
      {currentPage === 4 && <Page4 onReset={handleReset} />}
    </main>
  );
}
