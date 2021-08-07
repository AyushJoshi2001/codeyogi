import { useEffect, useState } from "react";
import { FC, memo } from "react";
import { fetchGroups } from "../../api/groups";
import SolidButton from "../../components/Button/SolidButton";
import Input from "../../components/Input/Input";
import { Group } from "../../models/Group";
import { User } from "../../models/User";

interface Props {
  user: User;
  className?: string;
}

const Dashboard: FC<Props> = ({ className, user }) => {
  const [group, setGroup] = useState<Group[]>([]);
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    // console.log("dashboard page");
    fetchGroups({
      status: "all-groups",
      query: query,
    }).then((data) => {
      setGroup(data!);
      // console.log(query);
    });
  }, [query]);

  return (
    <div className={"px-5 " + className}>
      <div className="flex pt-5 space-x-5 text-2xl font-medium">
        <img
          src={user.profile_pic_url}
          className="object-cover w-12 h-12 rounded-full"
          alt="profile pic"
        />
        <div className="flex items-center">
          <h1>Welcome! {user.first_name + " " + user.last_name}</h1>
        </div>
      </div>
      <div className="flex py-12">
        <Input
          type="text"
          placeholder="Search on Click"
          onChange={(event) => {
            setValue(event.target.value);
          }}
          className="mr-5 focus:border-primary w-30"
        />
        <SolidButton theme="primary" onClick={() => setQuery(value)}>
          Search
        </SolidButton>
      </div>
      <div className="flex pb-12">
        <Input
          type="text"
          placeholder="Search on Type"
          onChange={(event) => {
            setValue(event.target.value);
            setQuery(event.target.value);
          }}
          className="mr-5 focus:border-primary w-30"
        />
      </div>
      {group.map((groupProfile) => {
        return (
          <div
            key={groupProfile.id}
            className="flex w-full p-2 my-4 border border-black rounded-lg cursor-pointer bg-blue-50 hover:bg-black hover:text-white "
          >
            <img
              src={groupProfile.group_image_url}
              className="w-12 h-12 mr-2 text-xs rounded-full "
              alt="Group Profile "
              onError={(e: any) => {
                e.target.src = "/logo192.png";
                e.target.onerror = null;
              }}
            />
            <div>
              <p className="font-bold">{groupProfile.name}</p>
              <p className="text-sm text-gray-400 ">
                {groupProfile.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
