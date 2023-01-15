import Link from "next/link";
import React from "react";

function Custom404() {
  return (
    <div className="block h-40 items-center">
      <div className="mt-10 flex items-center justify-center text-xl">
        Sorry, page not found.
      </div>
      <div className="mt-10 flex items-center justify-center text-xl">
        <Link href="/">Go back to Home</Link>
      </div>
    </div>
  );
}

export default Custom404;
