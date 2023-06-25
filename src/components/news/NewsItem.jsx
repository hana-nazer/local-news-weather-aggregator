
import React from "react";

function NewsItem({ title, description, url, image, publishedAt }) {
  // Format the published date
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="w-3/4 mt-10 border rounded-lg">
        <div className="grid grid-cols-4 p-4">
          {/* Content */}
          <div className="col-span-3">
            <div className="grid grid-rows-2">
              {/* Title */}
              <div className="row-span-1">
                <p className="text-2xl font-bold">
                  {/* Link to the news article */}
                  <a href={url} className="underline">
                    {title}
                  </a>
                </p>
              </div>

              {/* Description */}
              <div className="row-span-1">
                <p>{description}</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="col-span-1">
            <img
              src={image}
              alt="not found"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Published date */}
        <div>
          <p>{formattedDate}</p>
        </div>
      </div>
    </>
  );
}

export default NewsItem;