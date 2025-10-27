// import { FC } from "react";
// import styles from './styles.module.css'
// import { getLabel, UniversalSelectType } from "./config";

import { FC } from "react";
import { SelectProps } from "./types";
import styles from './styles.module.css'
// type FilmEntity = {
//     data: UniversalSelectType[],
//     name: string,
//     onClick: (e:string)=>void
// }



// export const Select: FC<FilmEntity> = ({ data, name, onClick }) => {

//     return (
//         <form>
//             <select className={styles.select} name={name} onChange={(e)=>onClick(e.target.value)}>
//                 {data.map(elem => {
//                     const value = getLabel(elem)
//                     return <option className={styles.option} key={elem.id} value={elem.id} >{value}</option>
//                 }
//                 )}
//             </select>
//         </form>
//     )
// }

export const Select: FC<SelectProps> = ({ data, name, onClick }) => {
  return (
    <form>
      <select 
        className={styles.select} 
        name={name} 
        onChange={(e) => onClick(e.target.value)}
      >
        {data.map(elem => (
          <option 
            className={styles.option} 
            key={elem.id} 
            value={elem.id}
          >
            {elem.label}
          </option>
        ))}
      </select>
    </form>
  );
};