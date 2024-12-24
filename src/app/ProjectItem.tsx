import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

type ProjectItemProps = {
  src: string;
  title: string;
  description: string;
  link?: string; 
  tags?: string[]; 
};

export default function ProjectItem({
  src,
  title,
  description,
  link,
  tags,
}: ProjectItemProps) {
  return (
  <>
    <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"
          strategy="afterInteractive"
    />
    <a
        href={link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="flex flex-col md:flex-row justify-between w-full my-4 rounded-lg p-4 transition duration-300 ease-in-out bg-transparent hover:bg-gray-800 hover:shadow-lg cursor-pointer">
          {/* Image */}
          <div className="md:w-1/4 flex items-start">
            <img
              src={src}
              alt={title}
              className="w-50 h-auto rounded-lg border border-gray-900"
            />
          </div>

        {/* Title and Description */}
        <div className="md:w-3/4 mt-4 md:mt-0 md:ml-6">
          <div className="text-base sm:text-lg md:text-xl text-white flex items-center group-hover:text-custom-hover transition duration-300">
            {title}
            <FontAwesomeIcon
              icon={faSquareArrowUpRight}
              className="w-4 h-4 ml-2"
            />
          </div>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-2 leading-relaxed">
            {description}
          </p>

          {/* Tags */}
          {tags && (
            <div className="flex flex-wrap space-x-2 mt-4">
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
    </a>
  </>
  );
}