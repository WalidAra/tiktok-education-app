import { fcApi } from "@/libs/fcApi";
import UserHeader from "@/components/profile/UserHeader";
import GridLayoutVids from "@/components/profile/GridLayoutVids";

type Props = {
  params: {
    userID: string;
  };
};

const ProfilePage = async ({ params: { userID } }: Props) => {
  const userData: UserProp = await fcApi.fetchUserByID(userID);
  const userVids: VideoProp[] = await fcApi.fetchUserVids(userID);
  
  return (
    <div className="p-4 flex flex-col gap-10 z-0 mt-10 sm:mt-0">
      <UserHeader
        fullName={userData.fullName}
        Followers={userData.followers}
        numFollowing={userData.following.length}
        postedVids={userVids.length}
        userID={userID}
        userName={userData.userName}
        userPfp={userData.pfpUrl}
      />
      {userVids.length > 0 ? (
        <GridLayoutVids userVids={userVids} />
      ) : (
        <div className="center_all w-full mt-14">
          <p>you have not posted any video yet</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
