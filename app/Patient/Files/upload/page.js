"use client"
import { useState, useRef } from 'react';
import uploadFile from '../../../actions/uploadFile'
import { useRouter } from 'next/navigation';


export default function UploadForm() {
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const fileInputRef = useRef(null);
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', fileInputRef.current.files[0]);
        formData.append('description', description);
        formData.append('category', category);
        
        const message = uploadFile(formData)
        if(!message.error){
            setDescription("")
            setCategory ("")
            fileInputRef.current.value = ""
            alert("Upload Successful")
        }
    };
    
    function handleFinish(event){
        event.preventDefault()
        router.push("/Patient/Files")  
    }

    return (
        <div className="p-10 m-10 border-2 border-black border-solid rounded-md">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center">
                    <label htmlFor="description" className="w-1/4 text-sm font-medium">Description:</label>
                    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
                </div>
                <div className="flex items-center">
                    <label htmlFor="category" className="w-1/4 text-sm font-medium">Category:</label>
                    <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>Please select a category</option>
                    <option value="diagnosis">Diagnosis</option>
                    <option value="treatment">Treatment</option>
                    <option value="prescription">Prescription</option>
                    </select>
                </div>
                <div className="flex items-center">
                    <label htmlFor="file" className="w-1/4 text-sm font-medium">File:</label>
                    <input type="file" id="file" ref={fileInputRef} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                </div>
                <button type="submit" className="inline-flex items-center px-4 mx-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                    Upload
                </button>
                <div onClick = {handleFinish} className="inline-flex items-center px-4 mx-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                    Finish
                </div>
            </form>
        </div>
    );
}
