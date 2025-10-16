import { headerSearch } from "../../plugins/ComponentsUi/HeaderSearch/HeaderSearch";
import { detectCloseElement } from "./helper";

/*==================== Header ====================*/
const vw = $(window).width();

export const header = {
	scrollActive() {
		const height = $("header").height();
		if ($(window).scrollTop() > height) {
			$("header").addClass("active");
		} else {
			$("header").removeClass("active");
		}
	},

	mobile() {
		$(".header-hambuger").on("click", function () {
			$(this).toggleClass("active");
			$("body").toggleClass("isOpenMenu");
		});
	},

	initVariable() {
		const height = $("header").height();
		document.documentElement.style.setProperty("--header-height", `${height}px`);
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
					if (other !== list) other.classList.remove("active");
				});

				// Toggle menu hiện tại
				list.classList.toggle("active");
			});
		});

		// Đóng khi click ra ngoài
		document.addEventListener("click", () => {
			lists.forEach((list) => list.classList.remove("active"));
		});
	},
};

/*==================== Events ====================*/
document.addEventListener("scroll", () => header.scrollActive(), true);
