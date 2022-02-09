import React from 'react';
import './HomePage.css'
import bg from '../images/beach.png'

const Cards = () => {

    const cardInfo = [
        {
          title: "Residential 1",
          src: "/"
    
        },
        {
          title: "Residential 2",
          src: "/"
        },
        {
          title: "Commercial 1",
          src: "/"
        },
        {
          title: "Commercial 2",
          src: "/"
        },
        {
          title: "User",
          src: "/"
        },
        {
          title: "Statistic",
          src: "/"
        },
      ];

      const renderCard = (card, index) => {
        return (
            <div className='column'>
                <div key={index} className="card">
                    <div className='Title'>{card.title}</div>
                    <button type="button" className="btn btn-outline-info">View</button>      
                </div>
            </div>
            
        );
      };
  return <>
        <div className='background' style={{
            backgroundImage: `url(${bg})`,
            height:'100vh',
            marginTop:'-50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            }}>
            <div className='row'>
                    {cardInfo.map(renderCard)}
            </div>
        </div>;
  </>
};

export default Cards;

// **** ALTERNATIVE ****

// import React from 'react';
// import './Cards.css'
// import bg from '../images/bleach.png'

// const Cards = () => {
//   return <div>
//       <div className='background' style={{
//           backgroundImage: `url(${bg})`,
//           height:'100vh',
//           marginTop:'-60px',
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//       }}>
//     {/* <img src={bg} /> */}
//       <div className="row">
//         <div className="column">
//             <div className="card">
//                 <div className='Title'>Residential Conversion</div>
//                 <button type="button" className="btn btn-outline-info">View</button>      
//             </div>
//         </div>
//         <div className="column">
//             <div className="card">
//                 <div className='Title'>Residential Construction</div>
//                 <button type="button" className="btn btn-outline-info">View</button>
//             </div>
//         </div>
//         <div className="column">
//             <div className="card">
//                 <div className='Title'>Commercial Conversion</div>
//                 <button type="button" className="btn btn-outline-info">View</button>
//             </div>
//         </div>
//         <div className="column">
//             <div className="card">
//                 <div className='Title'>Commercial Conversion</div>
//                 <button type="button" className="btn btn-outline-info">View</button>
//             </div>
//         </div>
//         <div className="column">
//             <div className="card">
//                 <div className='Title'>Users</div>
//                 <button type="button" className="btn btn-outline-info">View</button>
//             </div>
//         </div>
//         <div className="column">
//             <div className="card">
//                 <div className='Title'>Statistic</div>
//                 <button type="button" className="btn btn-outline-info">View</button>
//             </div>
//         </div>
//     </div>
//     </div>
//   </div>;
// };

// export default Cards;
