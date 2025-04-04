import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

type ExperienceItemProps = {
  incoming?: boolean;
  dateRange: string;
  title: string;
  description: string;
  link?: string;
  tags?: string[];
};

export default function ExperienceItem({
  incoming,
  dateRange,
  title,
  description,
  link,
  tags,
}: ExperienceItemProps) {
  return (
    <div className="group">
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"
        strategy="afterInteractive"
      />
      <div className="flex flex-col md:flex-row justify-between w-full my-4 rounded-lg p-4 transition duration-300 ease-in-out bg-transparent hover:bg-gray-800 hover:shadow-lg">
        <div className="text-gray-400 text-xs sm:text-sm md:w-1/4 py-1">
          {dateRange}
        </div>
        <div className="md:w-3/4">
          <div className="text-base sm:text-lg md:text-xl text-white flex items-center group-hover:text-custom-hover hover:underline hover:underline-offset-2 transition duration-300">
            <a
              href={link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {title}
              {incoming && (
                <span className="text-custom-hover ml-1">
                  (incoming!){" "}
                </span>
              )}
              <FontAwesomeIcon
                icon={faSquareArrowUpRight}
                className="w-4 h-4 ml-2"
              />
            </a>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-2 leading-relaxed">
            {description}
          </p>

          {tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 mb-1 bg-gray-700 text-white rounded-full text-xs sm:text-sm group-hover:bg-gray-600 transition duration-300"
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
