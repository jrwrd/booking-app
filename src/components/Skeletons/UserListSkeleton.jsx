import React from "react";

function UserListSkeleton() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((skeleton) => (
        <div key={skeleton} className="flex flex-col gap-4 my-8">
        <div className="flex items-center gap-4">
          <div className="skeleton h-18 w-18 shrink-0 rounded-full"></div>
          <div className="flex flex-col gap-4 grow">
            <div className="skeleton h-4 w-1/4"></div>
            <div className="skeleton h-4 w-4/5"></div>
          </div>
        </div>
      </div>
      ))}
    </>
  );
}

export default UserListSkeleton;
