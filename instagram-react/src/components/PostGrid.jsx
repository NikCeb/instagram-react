function PostGrid() {
  const images = [
    "./public/images/DummyImage_1.jpg",
    "./public/images/DummyImage_2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img66.jpg",
  ];
  return (
    <>
      <section className="w-full max-w-5xl px-4">
        <h2 className="flex text-sm font-medium mb-4 justify-start items-start text-[#737373]">
          Top posts
        </h2>
        <div className="grid grid-cols-3 gap-1 justify-start">
          {images.map((src, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-300  overflow-hidden"
            >
              <img
                src={src}
                alt={`Post ${index + 1}`}
                className="w-full h-full object-cover "
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PostGrid;
