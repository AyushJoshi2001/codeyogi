import { useState } from "react";
import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { meFetchAction } from "../../actions/auth.actions";
import { ProfileData, updateProfile } from "../../api/profileUpdate";
import SolidButton from "../../components/Button/SolidButton";
import { meSelector } from "../../selectors/auth.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Profile: FC<Props> = (props) => {
  // const { user, setUser } = useContext(AppContext);
  const user = useAppSelector(meSelector);
  const dispatch = useDispatch();

  const [data, setData] = useState<ProfileData>({
    first_name: user!.first_name,
    middle_name: user!.middle_name,
    last_name: user!.last_name,
    education: user!.education,
  });
  const dob = `${user!.birth_year}-${user!.birth_month}-${user!.birth_date}`;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 ">
      <div className="mx-10 mt-10 bg-white rounded-lg">
        <div className="p-5">
          <h3 className="font-semibold text-gray-700">GENERAL INFORMATION</h3>
          <div className="flex flex-col pt-16 pb-8 md:px-16 xl:flex-row">
            <div className="flex-shrink-0 md:pr-10 lg:border-gray-300 xl:border-r">
              <img
                className="object-cover rounded-lg w-28 h-28"
                // add user profile photo
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                alt="profile"
              />
              <p className="pt-3 text-primary">Upload Picture</p>
            </div>
            <div className="flex flex-col pt-10 space-y-4 md:space-y-0 xl:pl-10 md:grid md:grid-cols-3 md:grid-rows-3 md:gap-x-5 md:gap-y-5 ">
              <div className="flex flex-col">
                <label htmlFor="Fname" className="text-sm text-gray-500">
                  First Name
                </label>
                <input
                  className="p-2 border border-gray-500 rounded outline-none focus:border-primary focus:shadow-lg"
                  name="first_name"
                  value={data.first_name}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Mname" className="text-sm text-gray-500">
                  Middle Name
                </label>
                <input
                  className="p-2 border border-gray-500 rounded outline-none focus:border-primary focus:shadow-lg"
                  name="middle_name"
                  value={data.middle_name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Middle Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Lname" className="text-sm text-gray-500">
                  Last Name
                </label>
                <input
                  className="p-2 border border-gray-500 rounded outline-none focus:border-primary focus:shadow-lg"
                  name="last_name"
                  value={data.last_name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                  required={true}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="dob" className="text-sm text-gray-500">
                  Date of Birth
                </label>
                <input
                  className="p-2 border border-gray-500 rounded"
                  type="date"
                  name="dob"
                  value={dob}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col col-span-3">
                <label htmlFor="Education" className="text-sm text-gray-500">
                  Education
                </label>
                <input
                  className="w-full p-2 border border-gray-500 rounded outline-none focus:border-primary focus:shadow-lg"
                  name="education"
                  type="text"
                  value={data.education}
                  onChange={handleChange}
                  placeholder="Education"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 mx-10 mt-10 bg-white rounded-lg">
        <h3 className="font-semibold text-gray-700">ABOUT</h3>
        <div className="flex flex-col pt-10">
          <label htmlFor="Bio" className="text-sm text-gray-500">
            Bio
          </label>
          <textarea
            className="p-2 border border-gray-500 rounded outline-none focus:border-primary focus:shadow-lg h-52"
            placeholder="Tell something interesting about yourself..."
            name="bio"
            value={user!.bio}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <div className="sticky bottom-0 px-5 py-2 mx-10 rounded bg-dark">
        <div className="flex justify-between">
          <SolidButton
            type="submit"
            theme="primary"
            className="shadow-xl hover:shadow-none"
            onClick={() => {
              setData({
                first_name: "",
                middle_name: "",
                last_name: "",
                education: "",
              });
            }}
          >
            Reset All
          </SolidButton>
          <SolidButton
            type="submit"
            theme="success"
            className="shadow-xl hover:shadow-none"
            onClick={() => {
              updateProfile(data).then((response) => {
                // console.log(response.data.data);
                dispatch(meFetchAction(response.data.data));
              });
            }}
          >
            Save Changes
          </SolidButton>
        </div>
      </div>
    </div>
  );
};

Profile.defaultProps = {};

export default memo(Profile);
