import { useEffect, useState } from "react";
import { FC, memo } from "react";
import { fetchGroups } from "../../api/groups";
import SolidButton from "../../components/Button/SolidButton";
import Input from "../../components/Input/Input";
import { BiSearch } from "react-icons/bi";
import { ME_GROUPS, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  // const { user } = useContext(AppContext);
  const user = useAppSelector((state) => state.me);
  const group = useAppSelector((state) => state.groups);
  const dispatch = useDispatch();

  // const [group, setGroup] = useState<Group[]>([]);
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    // console.log("dashboard page");
    fetchGroups({
      status: "all-groups",
      query: query,
    }).then((data) => {
      dispatch({ type: ME_GROUPS, payload: data });
      // setGroup(data!);
      // console.log(query);
    });
  }, [query]); // eslint-disable-line

  return (
    <div className="px-5 ">
      <div className="flex pt-5 space-x-5 text-2xl ">
        <img
          src={user!.profile_pic_url}
          className="object-cover w-12 h-12 text-sm rounded-full"
          alt="profile pic"
        />
        <div className="flex items-center font-medium">
          <h1>
            Welcome!{" "}
            {user!.first_name + " " + user!.middle_name + " " + user!.last_name}
          </h1>
        </div>
      </div>
      <div className="relative flex py-12">
        <Input
          type="text"
          placeholder="Search on Click"
          onChange={(event) => {
            setValue(event.target.value);
          }}
          className="mr-5 pl-7 w-30"
        />
        <BiSearch className="absolute w-6 h-6 text-gray-400" />
        <SolidButton theme="primary" onClick={() => setQuery(value)}>
          Search
        </SolidButton>
      </div>
      <div className="relative flex pb-12">
        <Input
          type="text"
          placeholder="Search on Type"
          onChange={(event) => {
            setValue(event.target.value);
            setQuery(event.target.value);
          }}
          className="mr-5 pl-7 w-30"
        />
        <BiSearch className="absolute w-6 h-6 text-gray-400" />
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
