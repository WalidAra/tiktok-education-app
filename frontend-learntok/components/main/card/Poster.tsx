/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type Props = {
  poster: UserProp;
  description: string;
};

const Poster = ({ poster, description }: Props) => {
  return (
    <div className="p-2 hidden sm:flex flex-col ">
      <Link href={`/user/${poster._id}`}>
        <div className="flex items-center gap-3">
          <img
            src={poster.pfpUrl}
            alt={poster.userName}
            className="w-11 h-11 rounded-full"
          />
          <div>
            <p className="hover:text-bgSixDark duration-150">
              {poster.userName}
            </p>
          </div>
        </div>
      </Link>
      <p className="text-gray-500 text-sm font-medium"> {description} </p>
    </div>
  );
};

export default Poster;
