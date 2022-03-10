
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from '../../../../../api/axios';
import FileUpload from '../../../../../Components/FileUpload';
import RichTextEditor from '../../../../../Components/RichTextEditor';


const AddNews = () => {
    const [content, setContent] = useState('');
  
    // const user = useSelector((state) => state.user.user);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      trigger,
    } = useForm();
  
    const handleEditorChange = (e) => {
      setContent(e.target.getContent());
    };
  
    const [file, setFile] = useState({});
  
    const onDrop = useCallback((acceptedFiles) => {
      setFile(acceptedFiles[0]);
    }, []);
  
    const handlePublishNews = async (data) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append(
        'news',
        JSON.stringify({
          ...data,
          content, 
        })
      );
  
      const response = await axios.post('http://localhost:5000/news/addNews', formData);
      console.log(response.data);
    };
  
    return (
      <div className="flex flex-col justify-center items-center min-h-full md:mt-24 space-y-6 md:mx-36">
        <h1 className='hover:text-blue-600'>Publish your News Now</h1>
        <form
          onSubmit={handleSubmit(handlePublishNews)}
          className="space-y-6 mx-auto"
        >
          <div className="flex flex-wrap gap-4 items-center justify-evenly">
            <div className="space-y-6">
              {/* title of the News */}
              <input
                className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('title', { required: "Title is Required" , maxLength: {
                  value: 25,
                  message: "First Name shouldn't exceed 25 words",
                }})}
                onKeyUp={() => {
                  trigger("title");
                }}
                placeholder="Title of your Development Item"
              />
              {errors.title && (
                <small className="text-danger">{errors.title.message}</small>
              )}
  
              {/* file upload */}
              <div className='w-full'>
                <FileUpload
                  onDrop={onDrop}
                  file={file}
                  message="Upload a banner for your News"
                />
              </div>
  
              {/* about the News */}
              <textarea
                className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('description', { required: "Description is Required",
                minLength: {
                  value: 500,
                  message: "Minimum Required length is 500",
                },
                maxLength: {
                  value: 5000,
                  message: "Maximum allowed length is 5000",
                }
               })}
               placeholder="Write what this News Articale Details"
               onKeyUp={() => {
                trigger("description");
              }}
              ></textarea>
              {errors.description && (
                <small className="text-danger">{errors.description.message}</small>
              )}
                
  
              {/* Publishd Date */}
              <input
                type="Date"
                className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('publishDate', { required: true })}
                placeholder="Write your News Publish Date"
              />
               <input
                type="time"
                className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('publishTime', { required: "publishTime is Required" })}
                onKeyUp={() => {
                  trigger("publishTime");
                }}
                placeholder="Write your News Publish Time"
            
              />
              {errors.publishTime && (
                <small className="text-danger">{errors.publishTime.message}</small>
              )}
               
            </div>
             
            
  
            {/* text editor for writing blogs */}
            <RichTextEditor
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              handleEditorChange={handleEditorChange}
              message="Start writing the blog"
            />
          </div>
          {/* submit button */}
          <input
            className="btn bg-primary rounded-lg w-full cursor-pointer hover:bg-opacity-80  transition-all duration-300"
            type="submit"
            value="Publish Your News"
          />
        </form>
      </div>
    );
  };
  
  export default AddNews;
  