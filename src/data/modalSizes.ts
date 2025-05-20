import classNames from "classnames";

const constClasses = classNames("modal-box", "max-w-7xl");

export default {
  large: classNames(constClasses, "w-full", "lg:w-11/12", "max-h-11/12"),
  small: classNames(constClasses, "w-3/4", "lg:w-1/2", "xl:w-1/3"),
};
