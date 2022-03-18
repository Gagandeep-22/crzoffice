import React from 'react'
import './DownloadFile.css'

const DownloadFile = () => {

  const pdfList = () => {
    fetch('http://localhost:8080/employees/download')
      .then(response => response.blob()
      .then(showFile(response)));
  }

  function showFile(fileAvailable) {
    for (let i = 0; i < fileAvailable.length; i++) {
      var filename = fileAvailable[i].filename;  
      renderFiles(filename);
    }
  }
  const renderFiles = (props) => {
    return (
        <div>{props.name}</div>
    );
  };
const ClickHandle = () => {
    console.log('Button Clicked')
    fetch('http://localhost:8080/employees/download')
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'employees.json';
					a.click();
				});
		});
}
  return (
    <div className='DownloadSection'>
        <div className='fileList'>
            <div>
                {pdfList}
            </div>
        </div>
        <button onClick={ClickHandle} type="button" className="btn btn-primary btn-sm">Download</button>
    </div>
  )
}

export default DownloadFile



// import React from 'react'
// import './DownloadFile.css'

// const DownloadFile = () => {

// const pdfFiles = [
//     {
//       title: "pdf1.pdf",
//     },
//     {
//       title: "pdf2.pdf",
//     },
//     {
//       title: "pdf3.pdf",
//     },
//     {
//       title: "pdf4.pdf",
//     },
//     {
//       title: "pdf5.pdf",
//     },
//   ];
//   const renderFiles = (File, index) => {
//     return (
//         <div key={index}>{File.title}</div>
//     );
//   };
// const ClickHandle = () => {
//     console.log('Button Clicked')
// }
//   return (
//     <div className='DownloadSection'>
//         <div className='fileList'>
//             <div>
//                 {pdfFiles.map(renderFiles)}
//             </div>
//         </div>
//         <button onClick={ClickHandle} type="button" className="btn btn-primary btn-sm">Download</button>
//     </div>
//   )
// }

// export default DownloadFile
