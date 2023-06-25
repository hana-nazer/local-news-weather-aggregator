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
      <div className="w-3/4 m-auto mt-10 transition border rounded-lg shadow-sm hover:shadow-lg">
        <div className="grid grid-cols-2 gap-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
          {/* Image */}
          <div className="flex items-center justify-center col-span-2 lg:col-span-1">
            <img
              src={image}
              alt="not found"
              className="object-cover w-[400px] h-[200px]"
            />
          </div>
          {/* Content */}
          <div className="col-span-3">
            <div className="flex flex-col">
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
              <div className="hidden row-span-1 pt-4 sm:hidden md:hidden lg:block">
                <p>{description}</p>
              </div>
              <div>
                <p>{formattedDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsItem;
