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
        li.addEventListener("click", (e) => {
          e.stopPropagation(); // 🟢 ngăn lan truyền
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

  handleSelectPackage() {
    const packageItems = document.querySelectorAll(".topup-package-item");
    const otherInput = document.querySelector(".topup-other input");
    const totalValue = document.querySelector(
      ".payment-info .value.text-primary"
    );

    packageItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Bỏ active cũ
        packageItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");

        // Nếu chọn gói cụ thể → disable input khác
        otherInput.value = "";
        // otherInput.disabled = true;

        // Lấy giá trị gói
        const value = item.querySelector("input").value;
        totalValue.textContent = `${Number(value).toLocaleString("vi-VN")} VNĐ`;
      });
    });

    // Khi nhập số tiền khác
    otherInput.addEventListener("input", (e) => {
      const val = e.target.value;
      const totalValue = document.querySelector(
        ".payment-info .value.text-primary"
      );
      totalValue.textContent = val
        ? `${Number(val).toLocaleString("vi-VN")} VNĐ`
        : "0 VNĐ";
    });

    // Cho phép nhập thủ công khi click input
    otherInput.addEventListener("focus", () => {
      packageItems.forEach((i) => i.classList.remove("active"));
      // otherInput.disabled = false;
    });
  },

  handleSelectMethod() {
    const methods = document.querySelectorAll(".topup-method");
    methods.forEach((method) => {
      method.addEventListener("click", () => {
        methods.forEach((m) => m.classList.remove("active"));
        method.classList.add("active");
      });
    });
  },

  customShowmore() {
    const desc = document.getElementById("desc");
    const btn = document.getElementById("toggleBtn");

    // 👉 Chỉ chạy nếu cả 2 phần tử tồn tại
    if (!desc || !btn) return;

    btn.addEventListener("click", () => {
      const isExpanded = desc.classList.contains("max-h-full");
      
      if (isExpanded) {
        desc.classList.remove("max-h-full");
        desc.classList.add("max-h-screen");
        btn.textContent = "XEM THÊM";
      } else {
        desc.classList.remove("max-h-screen");
        desc.classList.add("max-h-full");
        btn.textContent = "THU GỌN";
      }
    });
  },

  customSwiper() {
    const colnew = document.getElementById("colnew");
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1200) {
        colnew.classList.add("swiper-wrapper");
        colnew.classList.remove("gridcol");
      } else {
        colnew.classList.add("gridcol");
        colnew.classList.remove("swiper-wrapper");
      }
    });
  },

  customNavigationCount() {
    const prev = document.querySelectorAll(".navigation-prev");
    const next = document.querySelectorAll(".navigation-next");
    const pageDisplay = document.querySelectorAll(".page-count");
    let currentPage = 1;

    if (!prev || !next || !pageDisplay) return;

    next.forEach((btn) => {
      btn.addEventListener("click", () => {
        currentPage++;
        pageDisplay.forEach((el) => (el.textContent = currentPage));
      });
    });

    prev.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          pageDisplay.forEach((el) => (el.textContent = currentPage));
        }
      });
    });
  },

  customFaQ() {
    const items = document.querySelectorAll(".faq-item");

    items.forEach((item) => {
      const header = item.querySelector(".faq-header");
      header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        items.forEach((i) => i.classList.remove("active")); // đóng tất cả
        if (!isActive) item.classList.add("active"); // mở item hiện tại
      });
    });
  },
  init() {
    this.introductionActive();
    this.customSelect();
    this.handleSelectMethod();
    this.handleSelectPackage();
    this.customShowmore();
    this.customSwiper();
    this.customNavigationCount();
    this.customFaQ();
  },
};
