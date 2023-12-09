"use client";

import { useSearch } from "@/context/WhichSearch";
import { Tab, TabIndicator, TabList, Tabs } from "@chakra-ui/react";

const NavSearch = () => {
  const search = useSearch();

  return (
    <div className="block sm:p-2 sm:mt-0 mt-[68px]" >
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab onClick={() => search?.setValue(false)}>Videos</Tab>
          <Tab onClick={() => search?.setValue(true)}>Accounts</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
      </Tabs>
    </div>
  );
};

export default NavSearch;
