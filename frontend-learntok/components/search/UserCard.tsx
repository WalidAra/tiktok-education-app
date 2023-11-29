/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ColorSync from "../general/ColorSync";

type Props = {
  user: UserProp;
};

const UserCard = ({ user }: Props) => {
  return (
    <ColorSync
      key={user._id}
      style={"w-full duration-150 rounded sm:w-4/6  px-1 py-2"}
      onDark={"hover:bg-almostBlack "}
      onWhite={""}
    >
      <Link className="flex items-center gap-3" href={`/user`}>
        <img
          src={user.pfpUrl}
          className="w-10 h-10 rounded-full"
          alt={user.userName}
        />

        <div className="flex flex-col ">
          <h1 className="font-bold"> {user.userName} </h1>
          <p className="text-sm"> {user.fullName} </p>
        </div>
      </Link>
    </ColorSync>
  );
};

export default UserCard;
