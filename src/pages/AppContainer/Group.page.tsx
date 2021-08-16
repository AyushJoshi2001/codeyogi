import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { groupByIdSelector } from "../../selectors/groups.selectors";

interface Props {}

const Group: FC<Props> = (props) => {
  let groupId = parseInt(useParams<{ groupId: string }>().groupId);
  const groupFetch = useSelector(groupByIdSelector);
  const group = groupFetch[groupId];
  console.log(group);

  if (!group) {
    return <div className="text-red-600">Page Not Found</div>;
  }

  return (
    <div className="w-full px-10 bg-gray-100">
      <div className="px-5 py-10 mt-10 bg-white rounded-lg">
        <div className="flex justify-center">
          <img
            src={group.group_image_url || "./logo192.png"}
            className="w-16 h-16 mr-2 text-xs rounded-full "
            alt="Group Profile "
            onError={(e: any) => {
              e.target.src = "/logo192.png";
              e.target.onerror = null;
            }}
          />
          <div className="flex items-center pl-5">
            <h3 className="text-3xl font-semibold">{group.name}</h3>
          </div>
        </div>

        <div className="flex justify-center pt-10">
          <div className="space-y-5">
            <div>
              <p className="font-bold">Group ID: </p>
              <p>{group.id}</p>
            </div>
            <div>
              <p className="font-bold">Description: </p>
              <p>{group.description}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="sticky flex justify-between pt-3">
        <SolidButton
          type="button"
          onClick={() => {
            groupId--;
            console.log(groupId);
          }}
        >
          Previous
        </SolidButton>
        <SolidButton
          type="button"
          onClick={() => {
            groupId++;
            console.log(groupId);
          }}
        >
          Next
        </SolidButton>
      </div> */}
    </div>
  );
};

Group.defaultProps = {};

export default memo(Group);
