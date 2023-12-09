import { Tab, TabIndicator, TabList, Tabs } from "@chakra-ui/react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";

const VidSwitcher = () => {
  return (
    <>
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab>
            <Link href={"/"}>
              <div className="flex items-center gap-2 text-xl font-medium text-white">
                <div>
                  <AiFillHome />
                </div>
                <span>Home</span>
              </div>
            </Link>
          </Tab>
          <Tab>
            <Link href={"/following"}>
              <div className="flex items-center gap-2 text-xl font-medium text-white">
                <div>
                  <FaUserFriends />
                </div>
                <span>Following</span>
              </div>
            </Link>
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
      </Tabs>
    </>
  );
};

export default VidSwitcher;
