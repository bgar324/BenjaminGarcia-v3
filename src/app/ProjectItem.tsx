import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

type ProjectItemProps = {
  src: string;
  title: string;
  note?: string;
  description: string;
  link?: string;
  tags?: string[];

  //testing

  galleryImages?: string[];
  onImageClick?: (images: string[], initialIndex: number) => void;
};

export default function ProjectItem({
  src,
  title,
  note,
  description,
  link,
  tags,
  galleryImages,
  onImageClick,
}: ProjectItemProps) {
  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick(
        galleryImages && galleryImages.length > 0 ? galleryImages : [src],
        0
      );
    }
  };

  return (
    <div className = "group">
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"
        strategy="afterInteractive"
      />
      <div className="flex flex-col md:flex-row justify-between w-full my-4 rounded-lg p-4 transition duration-300 ease-in-out bg-transparent hover:bg-gray-800 hover:shadow-lg">
        <div className="md:w-1/4 flex items-start">
          <img
            src={src}
            alt={title}
            className="w-50 h-auto rounded-lg border border-gray-900"
            onClick={(e) => {
              e.preventDefault();
              handleImageClick();
            }}
          />
        </div>
        <div className="md:w-3/4 mt-4 md:mt-0 md:ml-6">
          <div className="text-base sm:text-lg md:text-xl text-white flex items-center group-hover:text-custom-hover transition duration-300 hover:underline hover:underline-offset-2 ease-in-out">
            <a
              href={link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {title}
              {note && <span className="ml-2 text-custom-hover">{note}</span>}
              <FontAwesomeIcon
                icon={faSquareArrowUpRight}
                className="w-4 h-4 ml-2"
              />
            </a>
          </div>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-2 leading-relaxed">
            {description}
          </p>

          {tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 mb-1 bg-gray-700 text-white rounded-full text-sm group-hover:bg-gray-600 transition duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
