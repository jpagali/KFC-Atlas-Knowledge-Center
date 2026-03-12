import React, { useEffect } from 'react';
import AtlasChat from '@site/src/components/AtlasChat';

function ImageZoom() {
  useEffect(() => {
    // Create overlay once
    let overlay = document.getElementById('img-zoom-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'img-zoom-overlay';
      const img = document.createElement('img');
      overlay.appendChild(img);
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => overlay.classList.remove('active'));
    }

    // Use event delegation — one listener on document handles all pages/navigations
    const handler = (e) => {
      const img = e.target.closest('.markdown img');
      if (!img) return;
      const overlayEl = document.getElementById('img-zoom-overlay');
      overlayEl.querySelector('img').src = img.src;
      overlayEl.classList.add('active');
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return null;
}

// Root wraps the entire app — AtlasChat appears on every page
export default function Root({ children }) {
  return (
    <>
      {children}
      <ImageZoom />
      <AtlasChat />
    </>
  );
}
