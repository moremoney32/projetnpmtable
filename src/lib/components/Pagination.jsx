import React from "react";

export const Pagination = ({ totalPosts, setCurrentPages }) => {
     let pages = [];
     for (let i = 1; i <= totalPosts; i++) {
          pages.push(i);
     }
     return (
          <React.Fragment>
               {pages.map((page, index) => {
                    return (
                         <span
                              // className="childprevious"
                              key={index}
                              onClick={() => setCurrentPages(page)}
                         >
                              {page}
                         </span>
                    );
               })}
          </React.Fragment>
     );
};
