import React from "react";
import s from "../../Common/Paginators/Paginators.module.css";

let Paginator = ({totalUsersCount,pageSize, currentPage,onPageChanged}) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize)

    let page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }

    return <div>
        {page.map(p => {
            return <span className={currentPage === p && s.selectedPage} onClick={(e) => {
                onPageChanged(p)
            }}>{p}</span>
        })}
    </div>
}

export default Paginator