import Alert from "./Alert";
import DefaultAlert from "./DefaultAlert";
import OutlineAlert from "./OutlineAlert";

const Solid = {
  title: "Alert",
  component: { Alert },
  argTypes: {
    theme: {
      options: ["primary", "dark", "danger"],
      control: { type: "radio" },
    },
  },
};

export const solid = (args: any) => <Alert {...args}></Alert>;

solid.args = {
  theme: "primary",
  children: " Lorem Ipsum is simply dummy text of the printing. ",
  className: " ",
};

const Default = {
  title: "Default Alert",
  component: { DefaultAlert },
  argTypes: {
    theme: {
      options: ["primary", "dark", "danger"],
      control: { type: "radio" },
    },
  },
};

export const defaultAlert = (args: any) => (
  <DefaultAlert {...args}></DefaultAlert>
);

defaultAlert.args = {
  theme: "primary",
  children: " Lorem Ipsum is simply dummy text of the printing. ",
  className: " ",
};

const Outline = {
  title: "Outline Alert",
  component: { OutlineAlert },
  argTypes: {
    theme: {
      options: ["primary", "dark", "danger"],
      control: { type: "radio" },
    },
  },
};

export const outlineAlert = (args: any) => (
  <OutlineAlert {...args}></OutlineAlert>
);

outlineAlert.args = {
  theme: "primary",
  children: " Lorem Ipsum is simply dummy text of the printing. ",
  className: " ",
};

export default Solid;
