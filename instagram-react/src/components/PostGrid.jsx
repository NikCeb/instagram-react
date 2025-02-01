import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import PropTypes from "prop-types";

function PostGrid({ showLoginHandler }) {
  const images = [
    { "./public/images/DummyImage_1.jpg": Math.floor(Math.random() * 100) },
    { "./public/images/DummyImage_2.jpg": Math.floor(Math.random() * 100) },
    { "./public/images/DummyImage_1.jpg": Math.floor(Math.random() * 100) },
    { "./public/images/DummyImage_2.jpg": Math.floor(Math.random() * 100) },
    { "./public/images/DummyImage_1.jpg": Math.floor(Math.random() * 100) },
    { "./public/images/DummyImage_2.jpg": Math.floor(Math.random() * 100) },
    { "./public/images/DummyImage_1.jpg": Math.floor(Math.random() * 100) },
    { "./public/images/DummyImage_2.jpg": Math.floor(Math.random() * 100) },
  ];
  return (
    <>
      <section className="w-full max-w-5xl">
        <h2 className="flex text-sm font-medium mb-4 justify-start items-start text-[#737373]">
          Top posts
        </h2>
        <div className="grid grid-cols-3 gap-1 justify-start">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden relative group"
            >
              <a href="#">
                <img
                  src={Object.keys(image)[0]}
                  alt={`Post ${index + 1}`}
                  className="w-full  h-full object-cover transition duration-300 ease-in-out group-hover:brightness-50"
                />
              </a>
              {/* Likes and Comments Icon */}
              <a href="#" onClick={showLoginHandler}>
                <div className="z-0 absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center space-x-10 text-white">
                  <div className="flex items-center space-x-2 text-bold">
                    <FaHeart className="h-6 w-6" />
                    <span>{Object.values(image)[0]}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-bold">
                    <FaComment className="h-6 w-6" />
                    <span>{Object.values(image)[0]}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

PostGrid.propTypes = {
  showLoginHandler: PropTypes.func,
};

export default PostGrid;
