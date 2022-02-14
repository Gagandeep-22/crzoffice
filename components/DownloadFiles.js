import React from 'react'
import './DownloadFile.css'

const DownloadFile = () => {

const pdfFiles = [
    {
      title: "pdf1.pdf",
    },
    {
      title: "pdf2.pdf",
    },
    {
      title: "pdf3.pdf",
    },
    {
      title: "pdf4.pdf",
    },
    {
      title: "pdf5.pdf",
    },
  ];
  const renderFiles = (File, index) => {
    return (
        <div key={index}>{File.title}</div>
    );
  };
const ClickHandle = () => {
    console.log('Button Clicked')
}
  return (
    <div className='DownloadSection'>
        <div className='fileList'>
            <div>
                {pdfFiles.map(renderFiles)}
            </div>
        </div>
        <button onClick={ClickHandle} type="button" className="btn btn-primary btn-sm">Download</button>
    </div>
  )
}

export default DownloadFile
