import axios from "axios";

const API_URL = "https://api.example.com/consults"; // Thay bằng API thật

export const getConsults = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching consults:", error);
    return [];
  }
};
