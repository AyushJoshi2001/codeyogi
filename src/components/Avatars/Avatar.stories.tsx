import Avatars from "./Avatar";
import AvatarStack from "./AvatarStack";

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

const avatarStack = {
  title: "AvatarStack",
  component: { AvatarStack },
  argTypes: {},
};

export const Avatar = (args: any) => <Avatars {...args}></Avatars>;
export const avatarstack = (args: any) => <AvatarStack {...args}></AvatarStack>;

Avatar.args = {
  url: "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
  shape: "circle",
  size: "medium",
  status: "offline",
  className: " ",
};

avatarstack.args = {
  users: [],
  className: " ",
  shape: "circle",
};

export default avatar;
