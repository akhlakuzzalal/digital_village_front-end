import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import axios from '../../../../../api/axios';
import FileUpload from '../../../../../Components/FileUpload';
import RichTextEditor from '../../../../../Components/RichTextEditor';

const EditNews = () => {
  const [content, setContent] = useState('');
  const { id } = useParams();
  const [news, setNews] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [isLoading,setIsLoading]=useState(false);

 

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleEditorChange = (e) => {
    setContent(e.target.getContent());
  };

  useEffect(() => {
    axios.get('/news/allNews')
      .then(res =>{
        setNews(res.data)
      })
  }, []);

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
 console.log(data)
    // const response = await axios.put('/news/editNews', formData);
 
  };
  const result=news.filter(d=>d._id ===id)
  console.log(result);


  return (
    <div  className="bg-cover h-[100%] w-[100%]bg-no-repeat md:pb-10    "
    style={{
      backgroundImage: `url(https://images.unsplash.com/photo-1551406483-3731d1997540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80)`,
    }}>
      <div className=' md:mx-48  py-6'>
      <h1 className='text-center my-8 text-white'>Edit News</h1>
      <form onSubmit={handleSubmit(handlePublishNews)} className="space-y-6 px-4">
        <div className="flex flex-wrap gap-4 items-center justify-evenly">
          {/* title of the News */}
          <input
            className="md:px-7  py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('title', { required: true, })}
            placeholder="Title of the news"
            defaultValue={result[0]?.title}
          />

          {/* file upload */}
          <div className="w-full rounded-full">
            <FileUpload
              onDrop={onDrop}
              file={file}
              message="Upload a banner for your News"
              defaultValue={result[0]?.image}
            />
          </div>

          {/* about the News */}
          <textarea
            className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('description', { required: true })}
            placeholder="Write the description in short"
            defaultValue={result[0]?.description}
          />

          {/* Publishd Date */}
          <input
            type="Date"
            className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('publishDate', { required: true })}
            placeholder="Write your News Publish Date"
            defaultValue={result[0]?.publishDate}
          />

          <input
            type="time"
            className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('publishTime', { required: true })}
            placeholder="Write your News Publish Time"
            defaultValue={result[0]?.publishTime}
          />
        </div>

        {/* text editor for writing blogs */}
        <RichTextEditor
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          handleEditorChange={handleEditorChange}
          message="Start writing the blog"
          defaultValue={result[0]?.content}
        />

        {/* submit button */}
        <input
          className="btn w-full -ml-2 md:mx-auto py-3 bg-white text-black rounded-lg  cursor-pointer hover:bg-opacity-80  transition-all duration-700 hover:bg-blue-600 hover:text-white"
          type="submit"
          value="Update Your News"
        />
      </form>
      </div>

    </div>
  );
};

export default EditNews;
