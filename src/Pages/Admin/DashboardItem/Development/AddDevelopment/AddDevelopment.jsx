
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from '../../../../../api/axios';
import FileUpload from '../../../../../Components/FileUpload';
import RichTextEditor from '../../../../../Components/RichTextEditor';


const AddDevelopment = () => {
    const [content, setContent] = useState('');
  
    const user = useSelector((state) => state.user.user);
  
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
  
    const handleAddDevelopment = async (data) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append(
        'development',
        JSON.stringify({
          ...data,
          content, 
        })
        
      );
  
      const response = await axios.post('http://localhost:5000/development/addDevelopment', formData)
      reset()
      console.log(response);
      
    };
  
    return (
      <div className="flex flex-col justify-center items-center min-h-full md:mt-24 space-y-6 md:mx-48">
        <h1 className='hover:text-blue-600'>Publish your New Development Now</h1>
        <form
          onSubmit={handleSubmit(handleAddDevelopment)}
          className="space-y-6 mx-auto"
        >
          <div className="flex flex-wrap gap-4 items-center justify-evenly">
            <div className="space-y-6">
              {/* title of the blog */}
              <input
                className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('title', 
                { required: "title is Required" })}
          
                onKeyUp={() => {
                  trigger("title");
                }}
                placeholder="Title of your Development"
              />
              {errors.title && (
          <small className="text-danger">{errors.title.message}</small>
        )}
  
              {/* file upload */}
              <div className='w-full'>
                <FileUpload
                  onDrop={onDrop}
                  file={file}
                  message="Upload a banner for your Development"
                />
              </div>
  
              {/* about the blog */}
              <textarea
                className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('description', 
                  { required: "Description is Required",
                  minLength: {
                  value: 30,
                  message: "Minimum Required length is 10",
                  },
                  maxLength: {
                  value: 250,
                  message: "Maximum allowed length is 250 ",
                  }
                  })}
                  placeholder="Write Development Description"
                  required
                  onKeyUp={() => {
                  trigger("description");
                  }}
                  ></textarea>
                  {errors.description && (
                  <small className="text-danger">{errors.description.message}</small>
                  )}
  
              {/* tags */}
              <input
                type="Date"
                className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('constructionDate', { required: true })}
                placeholder="Write your Construction Date"
              />
               
            </div>
             
            
  
            {/* text editor for writing blogs */}
            <RichTextEditor
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              handleEditorChange={handleEditorChange}
              message="Start writing the Development Item"
            />
          </div>
          {/* submit button */}
          <input
            className="btn bg-primary rounded-lg w-full cursor-pointer hover:bg-opacity-80  transition-all duration-300"
            type="submit"
            value="Publish Your Development"
          />
        </form>
      </div>
    );
  };
  
  export default AddDevelopment;
  