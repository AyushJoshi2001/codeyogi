import Progressbar from "./Progressbar";

const ProgressBar = {
  title: "ProgressBar",
  component: { Progressbar },
  argTypes: {
    theme: {
      options: ["primary", "dark", "danger"],
      control: { type: "radio" },
    },
  },
};

export const Progress = (args: any) => <Progressbar {...args}></Progressbar>;

Progress.args = {
  theme: "primary",
  progress: 50,
};

export default ProgressBar;
