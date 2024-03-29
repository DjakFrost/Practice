import React, {useState} from "react";
import s from "../../Common/Paginators/Paginators.module.css";

let Paginator = ({totalItemsCount,pageSize, currentPage,onPageChanged,portionSize = 10}) => {
    let pageCount = Math.ceil(totalItemsCount / pageSize)

    let page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }

    let portionCount = Math.ceil(pageCount/portionSize)
    let [portionNumber,setPortionNumber] = useState(1)
    let leftPortionPageNumber =(portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * pageSize



    return <div className={s.numberPage}>
        {portionNumber > 1 &&
            <button onClick={() =>{setPortionNumber(portionNumber - 1)}}>{"<<<"}</button>}

        {page.filter(p=> p>=leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
            return <span className={s.VisionPage}><span className={currentPage === p && s.selectedPage}
                         key={p}
                         onClick={(e) => {
                onPageChanged(p)
            }}>{p}</span></span>

        })}
        {portionCount > portionNumber &&
        <button onClick={()=> {setPortionNumber(portionNumber + 1)}}>{">>>"}</button>}
    </div>
}

export default Paginator