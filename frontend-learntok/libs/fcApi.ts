export const fcApi = {
  SignUp: async ({ email, fullName, password, userName }: SignUpProps) => {
    try {
      const response = await fetch("https://backend-learntok-app.onrender.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, fullName, password, userName }),
        cache: "no-store",
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Fetcher failed");
      }

      return data;
    } catch (error) {
      console.error(error);
    }
  },

  fetchVids: async () => {
    try {
      const response = await fetch("https://backend-learntok-app.onrender.com/api/videos", {
        cache: "no-store",
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Fetcher failed");
      }

      return data;
    } catch (error) {
      console.error(error);
    }
  },

  fetchVidByID: async (id: string) => {
    try {
      const response = await fetch("https://backend-learntok-app.onrender.com/api/videoById", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
        cache: "no-store",
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Fetcher failed");
      }

      return data;
    } catch (error) {
      console.error(error);
    }
  },

  fetchFollowingVids: async (id: string) => {
    try {
      const response = await fetch("https://backend-learntok-app.onrender.com/api/following", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
        cache: "no-store",
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Fetcher failed");
      }

      return data;
    } catch (error) {
      console.error(error);
    }
  },

  fetchSearchedVids: async (searchValue: string) => {
    try {
      const response = await fetch("https://backend-learntok-app.onrender.com/api/searchVids", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchValue }),
        cache: "no-store",
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Fetcher failed");
      }

      return data;
    } catch (error) {
      console.error(error);
    }
  },

  fetchLogin: async ({
    info,
  }: {
    info: { email: string; password: string };
  }) => {
    try {
      const response = await fetch("https://backend-learntok-app.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
        cache: "no-store",
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Fetcher failed");
      }

      return data;
    } catch (error) {
      console.error(error);
    }
  },

  fetchUserByID: async (id: string | null) => {
    try {
      const response = await fetch("https://backend-learntok-app.onrender.com/api/userById", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
        cache: "no-store",
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Fetcher failed");
      }

      return data;
    } catch (error) {
      console.error(error);
    }
  },

  fetchUserVids: async (id: string | null) => {
    try {
      const response = await fetch(
        "https://backend-learntok-app.onrender.com/api/get-user-videos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
          cache: "no-store",
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Fetcher failed");
      }

      return data;
    } catch (error) {
      console.error(error);
    }
  },

  updateLikeState: async ({
    userID,
    videoID,
    op,
  }: {
    userID: string;
    videoID: string;
    op: boolean;
  }) => {
    try {
      const response = await fetch(
        "https://backend-learntok-app.onrender.com/api/updateLikeState",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userID, videoID, op }),
          cache: "no-store",
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Fetcher failed");
      }

      return data;
    } catch (error) {
      console.error(error);
    }
  },

  updateFollowState: async ({
    newFollowing,
    userID,
  }: {
    newFollowing: string;
    userID: string;
  }) => {
    try {
      const response = await fetch(
        "https://backend-learntok-app.onrender.com/api/updateLikeState",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userID, newFollowing }),
          cache: "no-store",
        }
      );
      if (!response.ok) {
        throw new Error("Fetcher failed");
      }
    } catch (error) {
      console.error(error);
    }
  },

  AddNewComment: async ({
    info,
  }: {
    info: {
      usercomment: string;
      commenter_id: string;
      video_id: string;
    };
  }) => {
    try {
      const response = await fetch("https://backend-learntok-app.onrender.com/api/newComment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ info }),
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Fetcher failed");
      }
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  },

  ReverseFollowingAction: async ({
    followedID,
    op,
    userID,
  }: {
    userID: string;
    followedID: string;
    op: boolean;
  }) => {
    try {
      const response = await fetch(
        "https://backend-learntok-app.onrender.com/api/updateFollowUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ followedID, op, userID }),
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error("Fetcher failed");
      }
      const data = response.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  },

  updateVideoProps: async ({
    description,
    title,
    videoID,
  }: {
    title: string;
    description: string;
    videoID: string | undefined;
  }) => {
    try {
      const response = await fetch(
        "https://backend-learntok-app.onrender.com/api/updateVideoProps",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description, videoID }),
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error("Fetcher failed");
      }
      const data = response.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  },

  DeleteUser: async (id: string) => {
    //id user
    try {
      const response = await fetch("https://backend-learntok-app.onrender.com/api/delete-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Fetcher failed");
      }
      const data = response.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  },

  UpdatePfp: async ({ id, pfp }: { id: string; pfp: string }) => {
    try {
      const response = await fetch("https://backend-learntok-app.onrender.com/api/update-pfp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, pfp }),
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Fetcher failed");
      }
      const data = response.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  },

  UploadNewVideo: async (videoInfo: VidDetails) => {
    const { category_id, description, likes_count, poster_id, title, url } =
      videoInfo;
    try {
      const response = await fetch("https://backend-learntok-app.onrender.com/api/upload-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category_id,
          description,
          likes_count,
          poster_id,
          title,
          url,
        }),
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Fetcher failed");
      }
      const data = response.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  },
};
