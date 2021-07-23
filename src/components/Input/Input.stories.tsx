import Input from "./Input";

const Main = {
  title: "Input",
  component: { Input },
};

export const input = (args: any) => <Input {...args} />;

input.args = {
  type: "text",
  placeholder: "Input",
  className: "",
};

export default Main;
