import axios from "axios";
import { BASE_URL } from "./baseURL";

export const addPayment = async (payment: any) => {
  try {
    console.log("Sending payment data:", payment); // Log dữ liệu gửi đi
    const response = await axios.post(`${BASE_URL}/payments`, payment);
    console.log("Payment response:", response.data); // Log phản hồi từ server
    return response.data;
  } catch (error) {
    console.error("Payment error:", error); // Log lỗi chi tiết
  }
};

export const getPaymentById = async (userId: any) => {
  try {
    const response = await axios.get(`${BASE_URL}/payments?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
