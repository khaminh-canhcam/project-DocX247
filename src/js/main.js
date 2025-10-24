import AOS from "aos";
import lozad from "lozad";
import { setBackgroundElement, menuSpy, stickElementToEdge } from "./helper";
import { header } from "./header";
import { swiperInit } from "./swiper";
import { tabsletInit } from "./tabslet";
import { favoriteInit } from "./favorite";
import { feature } from "./feature-openItem";
$(document).ready(function () {
	setBackgroundElement();
	stickElementToEdge();
	menuSpy();
	header.init();
	feature.init();
	swiperInit();
	favoriteInit()
	tabsletInit();
});

/*==================== Aos Init ====================*/
AOS.init({
	offset: 100,
});
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

window.lozad = observer.observe();