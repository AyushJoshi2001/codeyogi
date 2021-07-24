import Progressbar from "./Progressbar";

const ProgressBar = {
  title: "ProgressBar",
  component: { Progressbar },
};

export const Progress = (args: any) => <Progressbar {...args}></Progressbar>;

Progress.args = {
  theme: "primary",
  progress: 50,
};

export default ProgressBar;
