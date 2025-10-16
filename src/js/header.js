import { headerSearch } from "../../plugins/ComponentsUi/HeaderSearch/HeaderSearch";
import { detectCloseElement } from "./helper";

/*==================== Header ====================*/
const vw = $(window).width();

export const header = {
  scrollActive() {
    const height = $("header").height();
    if ($(window).scrollTop() > height) {
      $("header").addClass("header-active");
    } else {
      $("header").removeClass("header-active");
    }
  },

  mobile() {
    $(".header-hamburger").on("click", function () {
      $(this).toggleClass("header-hamburger-active");
      $("body").toggleClass("isOpenMenu");
    });
    // 🔽 Dropdown toggle (slideUp / slideDown)
    $(document).on("click", ".dropdown-toggle", function (e) {
      e.preventDefault();
      const $parent = $(this).closest(".dropdown");
      const $menu = $parent.find(".dropdown-menu");

      if ($parent.hasClass("open")) {
        // đóng
        $menu.stop(true, true).slideUp(250);
        $parent.removeClass("open");
      } else {
        // đóng các dropdown khác nếu muốn chỉ 1 mở
        $parent
          .siblings(".dropdown")
          .removeClass("open")
          .find(".dropdown-menu")
          .slideUp(250);
        // mở dropdown được click
        $menu.stop(true, true).slideDown(250);
        $parent.addClass("open");
      }
    });
  },

  initVariable() {
    const height = $("header").height();
    document.documentElement.style.setProperty(
      "--header-height",
      `${height}px`
    );
  },

  init() {
    headerSearch();
    this.scrollActive();
    this.mobile();
    this.initVariable();
    this.megaMenu(); // thêm hàm mega menu ở đây
  },

  /*==================== Mega Menu ====================*/
  megaMenu() {
    const lists = document.querySelectorAll(".list");

    // Click vào từng list
    lists.forEach((list) => {
      list.addEventListener("click", (e) => {
        e.stopPropagation(); // Ngăn sự kiện lan ra ngoài

        // Đóng tất cả menu khác
        lists.forEach((other) => {
          if (other !== list) other.classList.remove("mega-menu-active");
        });

        // Toggle menu hiện tại
        list.classList.toggle("mega-menu-active");
      });
    });

    // Đóng khi click ra ngoài
    document.addEventListener("click", () => {
      lists.forEach((list) => list.classList.remove("mega-menu-active"));
    });
  },
};

/*==================== Events ====================*/
document.addEventListener("scroll", () => header.scrollActive(), true);
