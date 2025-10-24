export const feature = {
  introductionActive() {
    const items = document.querySelectorAll(".intro-item");
    items.forEach((item) => {
      item.addEventListener("click", () => {
        items.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
      });
    });
  },

  customSelect() {
    const selects = document.querySelectorAll(".filter");
    selects.forEach((select) => {
      const toggle = select.querySelector(".filter-select");
      const options = select.querySelector(".filter-options");
      const selected = toggle.querySelector("span");
      // Click toggle → mở / đóng menu
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        options.classList.toggle("hidden");
      });
      // Click chọn option
      options.querySelectorAll("li").forEach((li) => {
        li.addEventListener("click", () => {
          // Xóa active cũ
          options
            .querySelectorAll("li")
            .forEach((el) => el.classList.remove("active"));
          // Gán active mới
          li.classList.add("active");
          // Cập nhật text đã chọn
          selected.textContent = li.textContent;
          // Ẩn dropdown
          options.classList.add("hidden");
        });
      });
      // Click ngoài → đóng dropdown
      document.addEventListener("click", (e) => {
        if (!e.target.closest(".filter-select")) {
          options.classList.add("hidden");
        }
      });
    });
  },

  init() {
    this.introductionActive();
    this.customSelect(); // 👉 chạy custom dropdown
  },
};
