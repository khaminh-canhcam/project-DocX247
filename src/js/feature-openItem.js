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

  customCheckedPayment() {
    const packageItems = document.querySelectorAll(".popup-topup-package-item");
    const customInput = document.querySelector(".popup-topup-package-input");
    const paymentItems = document.querySelectorAll(".popup-topup-payment-item");

    // Click chọn gói nạp
    packageItems.forEach((item) => {
      const radio = item.querySelector('input[type="radio"]');
      item.addEventListener("click", () => {
        packageItems.forEach((i) => {
          i.classList.remove("active");
          const input = i.querySelector('input[type="radio"]');
          if (input) input.checked = false;
        });
        item.classList.add("active");
        if (radio) radio.checked = true;
        if (customInput) customInput.value = "";
      });
    });

    // Khi focus vào input nhập tiền khác
    if (customInput) {
      customInput.addEventListener("focus", () => {
        packageItems.forEach((i) => {
          i.classList.remove("active");
          const input = i.querySelector('input[type="radio"]');
          if (input) input.checked = false;
        });
      });
    }

    // Click chọn phương thức thanh toán
    paymentItems.forEach((item) => {
      const radio = item.querySelector('input[type="radio"]');
      item.addEventListener("click", () => {
        paymentItems.forEach((i) => {
          i.classList.remove("active");
          const input = i.querySelector('input[type="radio"]');
          if (input) input.checked = false;
        });
        item.classList.add("active");
        if (radio) radio.checked = true;
      });
    });
  },

  customPopupTopup() {
    const openBtns = document.querySelectorAll(".btn-open-topup");
    const popup = document.querySelector(".section-popup-topup");
    const closeBtn = popup?.querySelector(".popup-topup-close");

    if (!popup || !openBtns.length || !closeBtn) return;

    // mở popup khi click bất kỳ nút nào
    openBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        popup.classList.remove("hidden");
      });
    });

    // đóng popup khi click nút close
    closeBtn.addEventListener("click", () => {
      popup.classList.add("hidden");
    });

    // click ra ngoài popup thì đóng
    popup.addEventListener("click", (e) => {
      if (e.target === popup) popup.classList.add("hidden");
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

  init() {
    this.introductionActive();
    this.customSelect();
    this.customCheckedPayment();
    this.customPopupTopup();
    this.customShowmore();
  },
};
