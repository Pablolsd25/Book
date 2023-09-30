import { Estancias } from ".";

export default {
  title: "Components/Estancias",
  component: Estancias,
  argTypes: {
    default1: {
      options: ["hover", "deseable", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    default1: "hover",
    className: {},
    buttonText: "Button",
    buttonDivClassName: {},
    buttonButtonClassName: {},
  },
};
