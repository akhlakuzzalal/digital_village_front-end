import React, { useCallback, useEffect, useState } from 'react';
import {
  BsArrowReturnRight,
  BsFillCalendarDateFill,
  BsFillTelephoneFill,
} from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { useSelector } from 'react-redux';
import EditProfile from './EditProfile';

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const [editProfile, setEditProfile] = useState(false);
  const [file, setFile] = useState({});
  const [previewFile, setPreviewFile] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setPreviewFile(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    console.log(previewFile);
    console.log(previewFile.length, 'length');
  }, []);

  const handleUpdateProfile = async (data) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'user',
      JSON.stringify({
        ...data,
      })
    );

    console.log(data);

    // const response = await axios.post('/teacher/publishBlogs', formData);
    // console.log(response.data);
  };

  console.log(previewFile.length, 'length');

  const image = previewFile.map((f) => (
    <img
      key={f.name}
      src={f.preview}
      className="w-64 rounded-full h-64"
      alt={f.name}
    />
  ));

  useEffect(() => {
    previewFile.forEach((f) => URL.revokeObjectURL(f.preview));
  }, [previewFile]);

  return (
    <div className="mx-10 my-24">
      <div className="md:grid md:grid-cols-3">
        <div className="w-full flex flex-col items-center">
          {previewFile.length >= 1 ? (
            image
          ) : (
            <img
              className="w-64 rounded-full h-64"
              src="https://png.pngtree.com/png-vector/20200706/ourlarge/pngtree-businessman-user-character-vector-illustration-png-image_2298565.jpg"
              alt=""
            />
          )}
          <button
            onClick={() => setEditProfile(true)}
            className="btn bg-warning my-6"
          >
            Edit Profile
          </button>
        </div>
        {editProfile ? (
          <EditProfile
            setEditProfile={setEditProfile}
            handleUpdateProfile={handleUpdateProfile}
            onDrop={onDrop}
            file={file}
          />
        ) : (
          <div className="md:col-span-2">
            <h2 className="heading_md">
              {user.name}
              <span className="text-sm text-primary">(Approved)</span>
            </h2>
            <p>Occupation</p>
            <p className="font-semibold mb-10">#id : 123abc</p>
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
                Phone : <span className="font-semibold"> +99098345080</span>
              </p>
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <ImLocation />
                </span>
                Address : Level-4, 34, Awal Centre, Banani, Dhaka
              </p>
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <MdEmail />
                </span>
                Email: abcd@xyz.com
              </p>
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <BsFillCalendarDateFill />
                </span>
                Date of Birth : 02/02/2004
              </p>
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <BsArrowReturnRight />
                </span>
                Marital status : Married
              </p>
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <BsArrowReturnRight />
                </span>
                Religion: Islam
              </p>
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <BsArrowReturnRight py-2 />
                </span>
                Gender: male
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
