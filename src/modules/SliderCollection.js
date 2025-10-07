import Swiper from "swiper"
import { Navigation } from 'swiper/modules';
import "swiper/css"
import getAttrNameFromSelector from "@/utils/getAttrNameFromSelector";

const rootSelector = "[data-js-slider]"

class Slider {

  constructor(rootElement) {
    this.rootElement = rootElement
    this.config = JSON.parse(
      this.rootElement.getAttribute(getAttrNameFromSelector(rootSelector))
    )

    this.init()
  }

  init() {
    new Swiper(this.rootElement, {
      modules: [Navigation],
      ...this.config,
      navigation: {
        nextEl: ".slider__button--right",
        prevEl: ".slider__button--left",
      },
    })
  }

}

class SliderCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      console.log(rootSelector);

      new Slider(element);
    })
  }

}

export default SliderCollection
