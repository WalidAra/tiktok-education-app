import NavSearch from "@/components/search/NavSearch";
import SearchResult from "@/components/search/SearchResult";
import WhichSearchProvider from "@/context/WhichSearch";
import { fcApi } from "@/libs/fcApi";

type Props = {
  params: {
    searchValue: string;
  };
};

const SearchedValuePage = async ({ params: { searchValue } }: Props) => {
  const searchResults: SearchProps = await fcApi.fetchSearchedVids(searchValue);

  return (
    <div className="w-full grid grid-rows-auto1fr ">
      <WhichSearchProvider>
        <div className="w-full center_all">
          <NavSearch />
        </div>
        <SearchResult searchResults={searchResults} />
      </WhichSearchProvider>
    </div>
  );
};

export default SearchedValuePage;
