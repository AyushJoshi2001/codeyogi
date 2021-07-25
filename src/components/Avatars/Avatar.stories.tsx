import Avatars from "./Avatar";

const avatar = {
  title: "Avatar",
  component: { Avatars },
  argTypes: {
    shape: {
      options: ["square", "circle"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    status: {
      options: ["online", "offline", "unknown"],
      control: { type: "radio" },
    },
  },
};

export const Avatar = (args: any) => <Avatars {...args}></Avatars>;

Avatar.args = {
  url: "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
  shape: "circle",
  size: "medium",
  status: "offline",
  className: " ",
};

export default avatar;
