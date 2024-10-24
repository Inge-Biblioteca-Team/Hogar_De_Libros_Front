import api from "../../Services/AxiosConfig";

const GetFriend = async (
    page: number,
    limit: number,
    PrincipalCategory?: string,
    SubCategory?: string,
    Status?: string,
    DateGenerated?: string
  ) => {
    try {
      const params: { [key: string]: string | number | undefined } = {
        page,
        limit,
      };
  
      if (PrincipalCategory) params.PrincipalCategory = PrincipalCategory;
      if (SubCategory) params.SubCategory = SubCategory;
      if (Status) params.Status = Status;
      if (DateGenerated) params.registerDate = DateGenerated;
      const response = await api.get("friends-library", { params });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const AprobeFriend = async (FriendID: number) => {
    try {
      const response = await api.patch(`friends-library/aproveFriendLibrary/${FriendID}`);
      return response.data;
    } catch (error) {
      console.error("Error to aprove:", error);
      throw error;
    }
  };

  const DenyFriend = async (FriendID: number) => {
    try {
      const response = await api.patch(`friends-library/denyFriendLibrary/${FriendID}`);
      console.log(response.data);
      console.log("borro");
      return response.data;
    } catch (error) {
      console.error("Error to aprove:", error);
      throw error;
    }
  };

  export{GetFriend, AprobeFriend, DenyFriend}