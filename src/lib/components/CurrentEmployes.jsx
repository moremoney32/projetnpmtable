import React from "react";
import "./css/current.css";
import { useState, useEffect } from "react";
import { getLastName } from "./utils/getInfo.js";
import { getFirstName } from "./utils/getInfo.js";
import { getStartDate } from "./utils/getInfo.js";
import { getDepartment } from "./utils/getInfo.js";
import { getStreet } from "./utils/getInfo.js";
import { getCity } from "./utils/getInfo.js";
import { getSelect } from "./utils/getInfo.js";
import { getZipCode } from "./utils/getInfo.js";
import { getDate } from "./utils/getInfo.js";
import { searchElement } from "./utils/searchElement.js";
import { Pagination } from "./Pagination";
import { NavLink } from "react-router-dom";

export const CurrentEmployes = ({ arrayEmployes, arrayUseStore }) => {
     const [posts, setStartDate] = useState(arrayEmployes);
     const [currentPages, setCurrentPages] = useState(1);
     const [postInfos, setPostInfos] = useState(3);
     const [error, setError] = useState(false);
     const lastPages = currentPages * postInfos;
     const firstPages = lastPages - postInfos;
     const currentData = posts.slice(firstPages, lastPages);
     const arrayOption = [3, 5, 10, 15, 25];

     async function changes() {
          let trEmployes = document.querySelector(".trEmployes");
          let clicked = false;
          trEmployes.addEventListener("click", (event) => {
               if (event.target !== event.currentTarget) {
                    const employes = event.target.className;

                    if (employes === "firstName" && !clicked) {
                         clicked = true;
                         getFirstName(posts).then((response) => {
                              return (
                                   setStartDate(response),
                                   console.log(true),
                                   console.log(response)
                              );
                         });
                    } else if (employes === "lastName" && !clicked) {
                         clicked = true;
                         return getLastName(arrayEmployes).then((response) => {
                              return setStartDate(response);
                         });
                    } else if (employes === "startDate" && !clicked) {
                         clicked = true;
                         return getStartDate(arrayEmployes).then((response) => {
                              return setStartDate(response);
                         });
                    } else if (employes === "department" && !clicked) {
                         clicked = true;
                         return getDepartment(arrayEmployes).then(
                              (response) => {
                                   return setStartDate(response);
                              }
                         );
                    } else if (employes === "dateOfBirth" && !clicked) {
                         clicked = true;
                         return getDate(arrayEmployes).then((response) => {
                              return setStartDate(response);
                         });
                    } else if (employes === "street" && !clicked) {
                         clicked = true;
                         return getStreet(arrayEmployes).then((response) => {
                              return setStartDate(response);
                         });
                    } else if (employes === "city" && !clicked) {
                         clicked = true;
                         return getCity(arrayEmployes).then((response) => {
                              return setStartDate(response);
                         });
                    } else if (employes === "select" && !clicked) {
                         clicked = true;
                         return getSelect(arrayEmployes).then((response) => {
                              return setStartDate(response);
                         });
                    } else if (employes === "zipCode" && !clicked) {
                         clicked = true;
                         return getZipCode(arrayEmployes).then((response) => {
                              return setStartDate(response);
                         });
                    } else {
                         clicked = false;
                         console.log(false);
                         return setStartDate(arrayUseStore);
                    }
               }
          });
     }

     async function searchInformationEmploye() {
          let inputt = document.querySelector(".input");
          let timeOut = null;
          clearTimeout(timeOut);
          timeOut = setTimeout(() => {
               inputt.addEventListener("input", (event) => {
                    let error = document.querySelector(".error");
                    console.log(error);
                    const search = event.target.value;
                    if (search.length > 0) {
                         return searchElement(search).then((response) => {
                              setStartDate(response);
                              setError(response);
                         });
                    }
                    return setStartDate(arrayUseStore);
               });
          }, 1000);
     }

     useEffect(() => {
          const abortController = new AbortController();
          changes().then((response) => {
               return response;
          });
          searchInformationEmploye().then((response) => {
               return response;
          });

          return () => {
               abortController.abort();
          };
     }, []);
     let nbrpages = Math.ceil(posts.length / postInfos);
     function next() {
          if (currentPages !== nbrpages) {
               return (
                    setCurrentPages(currentPages + 1),
                    console.log(currentPages + 1)
               );
          }
     }
     function prev() {
          if (currentPages !== 1) {
               return (
                    setCurrentPages(currentPages - 1),
                    console.log(currentPages + 1)
               );
          }
     }

     const handleChange = (event) => {
          console.log(event.target.value);
          setPostInfos(event.target.value);
     };
     const currentemployes = {
          width: "1000px",
          margin: "auto",
          paddingTop: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
     };
     const titleEmployes = {
          textAlign: "center",
     };
     const divStyle = {
          display: "flex",
          justifyContent: "space-between",
     };
     const parentSelect = {
          display: "flex",
          gap: "3px",
     };
     const parentSearch = {
          display: "flex",
          gap: "3px",
     };
     const entriesPrevious = {
          display: "flex",
          justifyContent: "space-between",
     };
     const entries = {
          display: "flex",
          gap: "5px",
     };
     const previous = {
          display: "flex",
          gap: "8px",
          alignItems: "center",
     };
     const nextt = {
          cursor: "pointer",
     };
     const home = {
          margin: "auto",
     };
     const childprevious = {
          padding: "10px",
          background: "darkgray",
          textAlign: "center",
          cursor: "pointer",
     };
     const errorrs = {
          display: "block",
          position: "absolute",
          left: "35%",
          top: "40%",
          color: "red",
          fontSize: "40px",
     };
     const table = {
          padding: "5px",
          border: "2px solid #79526f",
          lineHeight: "35px",
          borderCollapse: "collapse",
          width: "100%",
     };
     const td = {
          background: "blanchedalmond",
          borderCollapse: "collapse",
          border: "2px solid skyblue",
          color: "black",
          height: "100px",
          fontSize: "15px",
          padding: "3px",
          width: "100px",
     };
     const th = {
          background: "blue",
          color: "white",
          height: "70px",
          fontSize: "15px",
          padding: "5px",
          cursor: "pointer",
          width: "100px",
          borderRight: "1px solid white",
     };
     const tr = {
          textAlign: "center",
          display: "flex",
          width: "100% !important",

          justifyContent: "space-between",
     };

     return (
          <div className="currentemployes" style={currentemployes}>
               <div className="titleEmployes" style={titleEmployes}>
                    <h1>Current Employees</h1>
               </div>
               <div style={divStyle}>
                    <div className="parentSelect" style={parentSelect}>
                         <span>show</span>
                         <select onChange={handleChange}>
                              {arrayOption.map((option, index) => {
                                   return (
                                        <option key={index} value={option}>
                                             {option}
                                        </option>
                                   );
                              })}
                         </select>

                         <span>entries</span>
                    </div>
                    <div className="parentSearch" style={parentSearch}>
                         <span>search:</span>
                         <input type="text" className="input" />
                    </div>
               </div>

               <table style={table}>
                    <thead>
                         <tr className="trEmployes" style={tr}>
                              <th
                                   className="firstName"
                                   style={th}
                                   role="columnheader"
                              >
                                   firstName
                              </th>
                              <th
                                   className="lastName"
                                   style={th}
                                   role="columnheader"
                              >
                                   lastName
                              </th>
                              <th
                                   className="startDate"
                                   style={th}
                                   role="columnheader"
                              >
                                   startDate
                              </th>
                              <th
                                   className="department"
                                   style={th}
                                   role="columnheader"
                              >
                                   department
                              </th>
                              <th
                                   className="dateOfBirth"
                                   style={th}
                                   role="columnheader"
                              >
                                   dateOfBirth{" "}
                              </th>
                              <th
                                   className="street"
                                   style={th}
                                   role="columnheader"
                              >
                                   street
                              </th>
                              <th
                                   className="city"
                                   style={th}
                                   role="columnheader"
                              >
                                   city
                              </th>
                              <th
                                   className="select"
                                   style={th}
                                   role="columnheader"
                              >
                                   state
                              </th>
                              <th
                                   className="zipCode"
                                   style={th}
                                   role="columnheader"
                              >
                                   zipCode
                              </th>
                         </tr>
                    </thead>
                    <tbody aria-hidden="true">
                         {currentData.map((card, index) => {
                              return (
                                   <tr key={index} className="tr" style={tr}>
                                        <td data-label="firstName" style={td}>
                                             {card.firstName}
                                        </td>
                                        <td data-label="lastName" style={td}>
                                             {card.lastName}
                                        </td>
                                        <td data-label="startDate" style={td}>
                                             {card.startdate}
                                        </td>
                                        <td data-label="Compta" style={td}>
                                             {card.department}
                                        </td>
                                        <td data-label="date" style={td}>
                                             {card.date}
                                        </td>
                                        <td data-label="street" style={td}>
                                             {card.street}
                                        </td>
                                        <td data-label="city" style={td}>
                                             {card.city}
                                        </td>
                                        <td data-label="select" style={td}>
                                             {card.select}
                                        </td>
                                        <td data-label="zipCode" style={td}>
                                             {card.zipCode}
                                        </td>
                                   </tr>
                              );
                         })}
                    </tbody>
               </table>
               <span
                    className="error"
                    style={
                         error.length === 0 ? { errorrs } : { display: "none" }
                    }
               >
                    No matching records found
               </span>

               <div style={entriesPrevious}>
                    <div className="entries" style={entries}>
                         <span>showing</span>
                         <span>{firstPages + 1}</span>
                         <span>to</span>
                         <span>
                              {lastPages <= posts.length
                                   ? lastPages
                                   : posts.length}
                         </span>
                         <span>of</span>
                         <span>{posts.length}</span>
                         <span>entries</span>
                    </div>
                    <div className="previous" style={previous}>
                         <span className="next" style={nextt} onClick={prev}>
                              previous
                         </span>
                         <Pagination
                              totalPosts={nbrpages}
                              setCurrentPages={setCurrentPages}
                              style={childprevious}
                         />
                         <span className="next" style={nextt} onClick={next}>
                              next
                         </span>
                    </div>
               </div>
               <div className="home" style={home}>
                    <NavLink to="/employes">home</NavLink>
               </div>
          </div>
     );
};
{
}
