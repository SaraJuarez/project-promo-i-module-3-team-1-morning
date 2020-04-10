import React from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import '../stylesheets/Main.scss';
import { useState } from 'react';

let formObject = {
  name: 'pipi',
  job: 'Front End Developer',
  email: 'pipi@gmail.com',
  tel: '644555334',
  linkedin: 'https://www.linkedin.com/in/beatrizfleon/',
  github: 'https://github.com/Beatrizfleon',
};
let data = {

}

function Main(props) {
  const [data, setData] = useState({});
  const handleInputPreview = value => {
    const newData = {
      ...data,
      // [value.name]: value.value
      value
    }
    setData(newData)

  }


  return (
    <div className="container-box" >
      <Box1 formObject={formObject} infoFromInput={data} />
      < Box2 handlefunction={handleInputPreview} />
    </div>
  );


}


//   return(
//       <div className = "container-box" >
//       <Box1 formObject={formObject} infoFromInput={data} />
//       <Box2 handlefunction={handleInputPreview} />
//       </div>
//     );
//   }
// }

export default Main;
