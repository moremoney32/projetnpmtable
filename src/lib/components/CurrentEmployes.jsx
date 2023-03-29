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

     return (
          <div className="currentemployes">
               <div className="titleEmployes">
                    <h1>Current Employees</h1>
               </div>
               <div className="selectSearch">
                    <div className="parentSelect">
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
                    <div className="parentSearch">
                         <span>search:</span>
                         <input type="text" className="input" />
                    </div>
               </div>

               <table>
                    <thead>
                         <tr className="trEmployes">
                              <th className="firstName">firstName</th>
                              <th className="lastName">lastName</th>
                              <th className="startDate">startDate</th>
                              <th className="department">department</th>
                              <th className="dateOfBirth">dateOfBirth </th>
                              <th className="street">street</th>
                              <th className="city">city</th>
                              <th className="select">state</th>
                              <th className="zipCode">zipCode</th>
                         </tr>
                    </thead>
                    <tbody>
                         {currentData.map((card, index) => {
                              return (
                                   <tr key={index}>
                                        <td data-label="firstName">
                                             {card.firstName}
                                        </td>
                                        <td data-label="lastName">
                                             {card.lastName}
                                        </td>
                                        <td data-label="startDate">
                                             {card.startdate}
                                        </td>
                                        <td data-label="Compta">
                                             {card.department}
                                        </td>
                                        <td data-label="date">{card.date}</td>
                                        <td data-label="street">
                                             {card.street}
                                        </td>
                                        <td data-label="city">{card.city}</td>
                                        <td data-label="select">
                                             {card.select}
                                        </td>
                                        <td data-label="zipCode">
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
                         error.length === 0
                              ? { display: "block" }
                              : { display: "none" }
                    }
               >
                    No matching records found
               </span>

               <div className="entriesPrevious">
                    <div className="entries">
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
                    <div className="previous">
                         <span className="next" onClick={prev}>
                              previous
                         </span>
                         <Pagination
                              totalPosts={nbrpages}
                              setCurrentPages={setCurrentPages}
                         />
                         <span className="next" onClick={next}>
                              next
                         </span>
                    </div>
               </div>
               <div className="home">home</div>
          </div>
     );
};
{
}
