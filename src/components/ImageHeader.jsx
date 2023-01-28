import React from "react";

function ImageHeader() {
  return (
    <section>
      <div className="flex items-center w-[400px] h-[100px] justify-center">
        <img className="w-full h-full object-cover" src="assets/logo.png" />
      </div>
    </section>
  );
}

export default ImageHeader;
