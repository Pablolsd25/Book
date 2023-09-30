import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["mail", "git-hub", "frame-13"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "mail",
    className: {},
    mailClassName: {},
  },
};
