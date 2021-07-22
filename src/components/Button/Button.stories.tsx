import SolidButton from "./SolidButton";
import OutlineButton from "./OutlineButton";

const Solid = {
  title: "Button",
  component: SolidButton,
  argTypes: {
    theme: {
      control: { type: "select" },
    },
  },
};

const Outline = {
  title: "Button",
  component: OutlineButton,
  argTypes: {
    theme: {
      control: { type: "select" },
    },
  },
};

export const solid = (args: any) => {
  return <SolidButton {...args}></SolidButton>;
};

export const outline = (args: any) => {
  return <OutlineButton {...args}></OutlineButton>;
};

solid.args = {
  type: "submit",
  className: " ",
};

outline.args = {
  type: "submit",
  className: " ",
};

export default Solid;
