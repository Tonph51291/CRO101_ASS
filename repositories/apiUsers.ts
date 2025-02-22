import axios from "axios";
import { BASE_URL } from "./baseURL";

interface Users {
  name: string;
  email: string;
  password: string;
}
interface UsersLogin {
  email: string;
  password: string;
}

export const register = async ({ name, email, password }: Users) => {
  try {
    await axios
      .post(`${BASE_URL}/users`, {
        name,
        email,
        password,
      })
      .then((respone) => console.log(respone));
  } catch (error) {
    console.error("Lỗi đăng ký:", error);
    throw error;
  }
};
export const login = async ({ email, password }: UsersLogin) => {
  try {
    // Gửi yêu cầu GET để kiểm tra email và password
    const response = await axios.get(`${BASE_URL}/users`, {
      params: { email, password },
    });

    if (response.data.length > 0) {
      console.log("Đăng nhập thành công:", response.data[0]);
      return response.data[0]; // Trả về thông tin user
    } else {
    }
  } catch (error) {}
};
