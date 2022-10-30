import React from 'react';
import Program from './Program';
 
 
const ProgramList = ({programList}) => {
   return (
       <div>
           {programList.map(program => {
               return (
                   <Program program={program} />
               )
           })}
       </div>
   );
};
 
export default ProgramList;