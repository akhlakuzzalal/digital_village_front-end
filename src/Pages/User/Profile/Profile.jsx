import React, { useCallback, useEffect, useState } from 'react';
import {
  BsArrowReturnRight,
  BsFillCalendarDateFill,
  BsFillTelephoneFill,
} from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import {
  getSingleUserInfo,
  updateUser,
} from '../../../redux/slices/user/userSlice';
import { uploadFile } from '../../../utilities/uploadFile';
import EditProfile from './EditProfile';

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const uId = useSelector((state) => state.user.uId);
  const [updateProfile, setUpdateProfile] = useState(false);
  const [file, setFile] = useState({});
  const [previewFile, setPreviewFile] = useState([]);

  const dispatch = useDispatch();

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFile(acceptedFiles[0]);
      setPreviewFile(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [previewFile]
  );

  const handleUpdateUser = async (data) => {
    let info = { ...data };

    if (file?.path) {
      const imageInfo = await uploadFile(file);
      info = {
        ...info,
        imageInfo,
      };
    }

    dispatch(
      updateUser({ id: uId, info, public_id: user?.imageInfo?.public_id })
    ).then(() => {
      dispatch(getSingleUserInfo(user.email));
      Swal.fire({
        title: 'updated successfully',
        confirmButtonText: 'Okay',
      });
    });
  };

  const image = previewFile.map((f) => (
    <img
      key={f.name}
      src={f.preview}
      className="w-64 rounded-full h-64"
      alt="drag and drop file to preview"
    />
  ));

  useEffect(() => {
    previewFile.forEach((f) => URL.revokeObjectURL(f.preview));
    dispatch(getSingleUserInfo(user.email));
    if (updateProfile === false) {
      setPreviewFile([]);
      setFile({});
    }
  }, [previewFile, uId, updateProfile]);

  return (
    <div className="w-full">
      <div className="lg:flex justify-center gap-12">
        <div>
          {/* profile preview image */}
          <div className="w-full flex flex-col items-center">
            {updateProfile && previewFile[0]?.path ? (
              image
            ) : (
              <img
                src={user?.imageInfo?.url}
                className="w-64 rounded-full h-64"
                alt={user?.profile?.name}
              />
            )}
            <button
              onClick={() => setUpdateProfile(true)}
              className="btn bg-warning my-6"
            >
              Edit Profile
            </button>
          </div>

          {/* user about info */}
          <p className="text-center">{user?.about}</p>
        </div>

        {/* profile edit or user info */}
        {updateProfile ? (
          <div className="lg:w-1/2">
            <EditProfile
              setUpdateProfile={setUpdateProfile}
              handleUpdateProfile={handleUpdateUser}
              onDrop={onDrop}
              file={file}
            />
          </div>
        ) : (
          <div className="mt-10 md:mt-0 lg:w-1/2">
            <h2 className="heading_md dark:text-white">{user?.name}</h2>
            <p className="pt-3">{user?.occupation}</p>
            <p className="font-semibold mb-10 break-words">
              #id : villager{uId}
            </p>

            {/* <div className="my-6">
              <button className="btn bg-primary mb-2">Send Message</button>
              <button className="btn bg-secondary mb-2">Contact User</button>
              <button className="btn bg-secondary mb-2">Report User</button>
            </div> */}

            <h6 className="inline border-b-2 border-zinc-900">
              Profile details
            </h6>

            <div className="mt-6">
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <BsFillTelephoneFill />
                </span>
                <div className="flex flex-wrap">
                  <p>Phone :</p>
                  <span className="font-semibold">
                    {user?.phone || 'unavailable'}
                  </span>
                </div>
              </p>
              <p className="flex items-center py-2 text-sm md:text-base break-words">
                <span className="mr-4">
                  <MdEmail />
                </span>
                Email: {user?.email}
              </p>
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <BsFillCalendarDateFill />
                </span>
                <div className="flex flex-wrap">
                  <p>Date of Birth :</p>
                  <p>{user?.dateOfBirth}</p>
                </div>
              </p>
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <BsArrowReturnRight />
                </span>
                Marital status : {user?.maritalStatus || 'unavailable'}
              </p>
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <BsArrowReturnRight />
                </span>
                Employment status : {user?.employmentStatus || 'unavailable'}
              </p>
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <BsArrowReturnRight />
                </span>
                Religion: {user?.religion || 'unavailable'}
              </p>
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <BsArrowReturnRight />
                </span>
                Gender: {user?.gender || 'unavailable'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
