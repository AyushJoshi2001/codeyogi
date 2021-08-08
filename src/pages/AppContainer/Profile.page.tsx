import { FC, memo } from "react";
import Button from "../../components/Button/Button";
import SolidButton from "../../components/Button/SolidButton";

interface Props {}

const Profile: FC<Props> = (props) => {
  return (
    <div className="w-full min-h-screen bg-gray-200 ">
      <div className="mx-10 mt-10 bg-white rounded-lg">
        <div className="p-5">
          <h3 className="font-semibold text-gray-700">GENERAL INFORMATION</h3>
          <div className="flex px-16 pt-16 pb-8 ">
            <div className="flex-shrink-0 pr-10 border-r border-gray-300">
              <img
                className="object-cover rounded-lg w-28 h-28"
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                alt="profile"
              />
              <p className="pt-3 text-center text-primary">Upload Picture</p>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 pl-10 gap-x-5 gap-y-5 ">
              <div className="flex flex-col">
                <label htmlFor="Fname" className="text-sm text-gray-500">
                  First Name
                </label>
                <input
                  className="p-2 border border-gray-500 rounded outline-none focus:border-primary focus:shadow-lg"
                  name="Fname"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Mname" className="text-sm text-gray-500">
                  Middle Name
                </label>
                <input
                  className="p-2 border border-gray-500 rounded outline-none focus:border-primary focus:shadow-lg"
                  name="Mname"
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
                  name="Lname"
                  type="text"
                  placeholder="Last Name"
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
                />
              </div>
              <div className="flex flex-col col-span-3">
                <label htmlFor="Education" className="text-sm text-gray-500">
                  Education
                </label>
                <input
                  className="w-full p-2 border border-gray-500 rounded outline-none focus:border-primary focus:shadow-lg"
                  name="Education"
                  type="text"
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
          ></textarea>
        </div>
      </div>

      <div className="sticky bottom-0 px-5 py-2 mx-10 rounded bg-dark">
        <div className="flex justify-between">
          <SolidButton
            type="submit"
            theme="primary"
            className="shadow-xl hover:shadow-none"
          >
            Reset All
          </SolidButton>
          <SolidButton
            type="submit"
            theme="success"
            className="shadow-xl hover:shadow-none"
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
