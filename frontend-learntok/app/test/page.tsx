"use client"
import { UploadButton } from '@/src/utils/uploadthing';
import React from 'react'

const Test = () => {
  return (
    <div className='w-full h-full center_all' >
      <UploadButton
        endpoint="mediaPost"
        onClientUploadComplete={(res) => {
                alert(`DONE ! ${res[0].fileUrl} `);
        }}
        onUploadError={(error: Error) => {

          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}

export default Test