import axios from "axios";
import { BASE_URL } from "./baseURL";

export const addCart = async (product: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/cart`, product);
    return response.data; // Trả về data từ API
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error; // Ném lỗi để xử lý sau nếu cần
  }
};

export const getCartByUserId = async (userId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/cart?userId=${userId}`);
    return response.data; // Trả về dữ liệu giỏ hàng từ API
  } catch (error) {
    console.error("Error fetching cart by userId:", error);
    throw error; // Ném lỗi nếu có
  }
};

export const getListCart = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/cart`);
    // Kiểm tra dữ liệu trả về từ API
    return response.data; // Trả về danh sách giỏ hàng
  } catch (error) {
    console.error("Error fetching all carts:", error);
    throw error; // Ném lỗi để xử lý sau
  }
};
export const updateCartById = async (cartId: string, updatedItems: any) => {
  try {
    const response = await axios.patch(`${BASE_URL}/cart/${cartId}`, {
      items: updatedItems,
    });
    console.log("ben api : ", updatedItems);

    console.log("Cập nhật giỏ hàng thành công:", response.data);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi cập nhật giỏ hàng:", error);
    throw error;
  }
};
export const updateQuantityOnAPI = async (idCart: any, newQuantity: any) => {
  try {
    const response = await axios.patch(`${BASE_URL}/cart/${idCart}`, {
      quantity: newQuantity,
    });

    if (response.status === 200) {
      console.log("Cập nhật số lượng thành công!");
    } else {
      console.error("Lỗi cập nhật số lượng:", response.data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};
export const removeProductFromCart = async (
  cartId: string,
  productId: string
) => {
  try {
    // Lấy danh sách sản phẩm hiện tại trong giỏ hàng
    const response = await axios.get(`${BASE_URL}/cart/${cartId}`);
    let cart = response.data;

    // Lọc bỏ sản phẩm cần xóa
    cart.items = cart.items.filter((item: any) => item.productId !== productId);

    // Gửi yêu cầu cập nhật giỏ hàng
    await axios.patch(`${BASE_URL}/cart/${cartId}`, { items: cart.items });

    console.log(`Đã xóa sản phẩm ${productId} khỏi giỏ hàng.`);
    return true;
  } catch (error) {
    console.error("Lỗi khi xóa sản phẩm khỏi giỏ hàng:", error);
    return false;
  }
};
