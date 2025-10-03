import React, { useEffect, useState } from "react";
const Size = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // ✅ window resize handle করার জন্য
  useEffect(() => {
    const resizeWindow = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []); // ✅ scroll position restore করার জন্য
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }

    const saveScroll = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };

    window.addEventListener("beforeunload", saveScroll);
    return () => {
      window.removeEventListener("beforeunload", saveScroll);
    };
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-lg py-2 bg-blue-100">
        Screen Width: {size.width}px | Height: {size.height}px
      </h1>
      <div className="flex w-full text-center items-center h-12">
        {/* 2 ভাগ */}
        <div
          className="flex border-r-[1px] border-red-900  py-auto bg-red-100 h-full items-center justify-center"
          style={{ width: `${size.width / 2}px` }}
        >
          {(size.width / 2 / 4).toFixed(2)} / 4 tailwind =
          {(size.width / 2 / 16).toFixed(2)} rem
        </div>

        {/* 4 ভাগ */}
        <div
          className="flex border-r-[1px] border-red-900 py-auto bg-green-100 h-full items-center justify-center"
          style={{ width: `${size.width / 4}px` }}
        >
          {(size.width / 4 / 4).toFixed(2)} rem
        </div>

        {/* 8 ভাগ */}
        <div
          className="flex py-auto bg-blue-100 border-r-[1px] border-red-900 h-full items-center justify-center"
          style={{ width: `${size.width / 8}px` }}
        >
          {(size.width / 8 / 4).toFixed(2)} rem
        </div>
        {/* 4 ভাগ */}
        <div
          className="flex py-auto bg-red-300 border-r-[1px] border-red-900 h-full items-center justify-center"
          style={{ width: `${size.width / 16}px` }}
        >
          {(size.width / 16 / 4).toFixed(2)} rem
        </div>
      </div>
    </div>
  );
};

export default Size;
