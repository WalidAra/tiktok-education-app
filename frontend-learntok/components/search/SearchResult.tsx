/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */

"use client";
import { useSearch } from "@/context/WhichSearch";
import UserCard from "./UserCard";
import VideoCard from "./VideoCard";
import { useEffect } from "react";

type Props = {
  searchResults: SearchProps;
};

const SearchResult = ({ searchResults }: Props) => {
  const search = useSearch();

  useEffect(() => {
    if (searchResults.users.length > searchResults.finalVids.length) {
      search?.setValue(true);
    } else {
      search?.setValue(false);
    }
  
  }, []);

  return (
    <section
      className={`w-full flex ${
        search?.value ? "flex-col gap-2" : "flex-wrap gap-7"
      } p-3`}
    >
      {search?.value ? (
        searchResults.users.length > 0 ? (
          searchResults.users.map((user) => <UserCard user={user} />)
        ) : (
          <div className="w-full h-full center_all">
            <span>No users found with this userName of fullName</span>
          </div>
        )
      ) : searchResults.finalVids.length > 0 ? (
        searchResults.finalVids.map((vid) => (
          <>
            <VideoCard video={vid} />

          </>
        ))
      ) : (
        <div className="w-full h-full center_all">
          <span>No videos found with this search value</span>
        </div>
      )}
    </section>
  );
};

export default SearchResult;
