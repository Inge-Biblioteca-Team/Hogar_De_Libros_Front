import api from "./AxiosConfig";

const GetStats = async () => {
  try {
    const response = await api.get(`stats`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const GetActivitiesCounts = async () => {
  try {
    const response = await api.get(`stats/successful-counts/current-year`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const GetGeneralCounts = async () => {
  try {
    const response = await api.get(`stats/general-counts`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const GetCalendarItems = async () => {
  try {
    const response = await api.get(`stats/Week-Calendar`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { GetStats, GetActivitiesCounts, GetGeneralCounts, GetCalendarItems };
