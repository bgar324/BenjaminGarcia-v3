import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

type ImageModalProps = {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
};

export default function ImageModal({ images, initialIndex = 0, onClose }: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "modal-background") {
      handleClose();
    }
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose(); 
    }, 300);
  };

  return (
    <div
      id="modal-background"
      onClick={handleBackgroundClick}
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 ${
        closing ? "animate-slideDown" : "animate-slideUp"
      } ease-in-out`}
    >
      <div className="relative max-w-7xl max-h-full flex justify-center items-center">
        <img
          src={images[currentIndex]}
          alt="Presented"
          className="w-11/12 md:w-full h-auto rounded-lg"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-custom-hover text-base sm:text-lg md:text-xl p-2 ml-4 md:ml-2"
            > 
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-custom-hover text-base sm:text-lg md:text-xl p-2 mr-4 md:mr-2"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </>
        )}
        {/* <button
          onClick={handleClose}
          className="absolute top-0 right-0 text-custom-hover text-xl p-2"
        >
         <FontAwesomeIcon icon={faCircleXmark} />
        </button> */}
      </div>
    </div>
  );
}
