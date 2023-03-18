import React from "react";

function Loading() {
  return (
    <div className="relative mx-auto my-2 flex h-20 w-20 items-center justify-center hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-6 w-6 animate-pulse rounded-full bg-purple-900" />
      </div>
      <div className="h-20 w-20 animate-spin rounded-full border-t-4 border-b-4 border-purple-900" />
    </div>
  );
}

export default Loading;
