export const featureSection = () => {
  const items = document.querySelectorAll(".intro-item");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      // Xóa active cũ
      items.forEach((i) => i.classList.remove("active"));
      // Thêm active mới
      item.classList.add("active");
    });
  });
};

// Gọi hàm sau khi DOM ready
document.addEventListener("DOMContentLoaded", featureSection);
