import React, { useState } from 'react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Sample photos - in a real app, these would come from a CMS or API
  const photos: Photo[] = [
    {
      id: 1,
      src: 'https://via.placeholder.com/400x300/d4af37/ffffff?text=Photo+1',
      alt: 'John and Jane at the coffee shop',
      caption: 'Where it all began - our first meeting at Central Coffee'
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/400x300/8b4513/ffffff?text=Photo+2',
      alt: 'Mountain vacation',
      caption: 'Our first vacation together in the mountains'
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/400x300/f5f5dc/333333?text=Photo+3',
      alt: 'Moving in together',
      caption: 'The day we got our first apartment together'
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/400x300/d4af37/ffffff?text=Photo+4',
      alt: 'Beach proposal',
      caption: 'The magical proposal at Sunset Beach'
    },
    {
      id: 5,
      src: 'https://via.placeholder.com/400x300/8b4513/ffffff?text=Photo+5',
      alt: 'Engagement celebration',
      caption: 'Celebrating our engagement with family and friends'
    },
    {
      id: 6,
      src: 'https://via.placeholder.com/400x300/f5f5dc/333333?text=Photo+6',
      alt: 'Wedding planning',
      caption: 'Planning our perfect day together'
    },
    {
      id: 7,
      src: 'https://via.placeholder.com/400x300/d4af37/ffffff?text=Photo+7',
      alt: 'Pre-wedding photoshoot',
      caption: 'Our engagement photoshoot'
    },
    {
      id: 8,
      src: 'https://via.placeholder.com/400x300/8b4513/ffffff?text=Photo+8',
      alt: 'Adventure together',
      caption: 'Always ready for the next adventure'
    }
  ];

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (!selectedPhoto) return;
    
    const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    } else {
      newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedPhoto(photos[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      navigatePhoto('prev');
    } else if (e.key === 'ArrowRight') {
      navigatePhoto('next');
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            onClick={() => openLightbox(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="lightbox-overlay"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <div className="relative max-w-4xl max-h-screen p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <button
              onClick={() => navigatePhoto('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              aria-label="Previous photo"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <button
              onClick={() => navigatePhoto('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              aria-label="Next photo"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {selectedPhoto.caption && (
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                <p className="text-center">{selectedPhoto.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;