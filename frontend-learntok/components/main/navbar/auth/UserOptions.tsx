import MyIconButton from "@/components/general/MyIconButton";
import Link from "next/link";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import BarToggle from "./BarToggle";


const UserOptions = () => {
  return (
    <div className="flex items-center gap-4">
      <>
        <Link href={"/upload"}>
          <MyIconButton style="">
            <AiOutlinePlusCircle />
          </MyIconButton>
        </Link>

        <MyIconButton style="">
          <IoIosNotifications />
        </MyIconButton>

        <BarToggle />
      </>
    </div>
  );
}

export default UserOptions