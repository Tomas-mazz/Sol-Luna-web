'use client';
export default function BackImage({ images, name }) {
  return (
    <div className="flex-1 mb-4 overflow-hidden rounded-lg">
      {images.length > 1 ? (
        <img
          src={images[1]}
          alt={`${name} - back`}
          className="w-full aspect-[3/4] object-cover rounded-lg"
        />
      ) : (
        <div className="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">Más imágenes</span>
        </div>
      )}
    </div>
  );
}
