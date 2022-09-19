import Cloner from "./Cloner";

interface IDimensions {
  container: {
    width: number;
    height: number;
  };
  content: {
    width: number;
    height: number;
  };
}

export default class Wiring {
  container: HTMLElement;
  content: HTMLElement;
  dimensions: IDimensions;
  cloneWire: Cloner;

  constructor(container, content) {
    this.container = container;
    this.content = content;

    this.cloneWire = new Cloner(this);
  }

  updateDimensions(container: HTMLElement, content: HTMLElement) {
    this.dimensions = {
      container: {
        width: container.clientWidth,
        height: container.clientHeight,
      },
      content: {
        width: content.clientWidth,
        height: content.clientHeight,
      },
    };
  }
}