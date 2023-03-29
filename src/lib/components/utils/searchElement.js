import { normalize } from "./normalise.js";

export function searchElement(userInput) {
     let arrayEmployes = JSON.parse(localStorage.getItem("employesId"));
     return new Promise((resolve, reject) => {
          /***function qui filtre le firstname***/
          userInput = normalize(userInput);
          function searchFirstName() {
               return new Promise((resolve) => {
                    const searchFirstName = arrayEmployes.filter((employe) => {
                         if (
                              employe.firstName
                                   .toLowerCase()
                                   .includes(userInput)
                         ) {
                              return employe;
                         }
                    });

                    return (
                         resolve(searchFirstName), console.log(searchFirstName)
                    );
               });
          }
          /***** function qui filtre le lastname*/
          function searchLastName() {
               return new Promise((resolve) => {
                    const searchLastName = arrayEmployes.filter((employe) => {
                         if (
                              employe.lastName.toLowerCase().includes(userInput)
                         ) {
                              return employe;
                         }
                    });

                    return resolve(searchLastName);
               });
          }

          function searchStartDate() {
               return new Promise((resolve) => {
                    const searchStartDate = arrayEmployes.filter((employe) => {
                         if (
                              employe.department
                                   .toLowerCase()
                                   .includes(userInput)
                         ) {
                              return employe;
                         }
                    });

                    return resolve(searchStartDate);
               });
          }
          function searchDepartment() {
               return new Promise((resolve) => {
                    const searchDepartment = arrayEmployes.filter((employe) => {
                         if (employe.startdate.includes(userInput)) {
                              return employe;
                         }
                    });

                    return resolve(searchDepartment);
               });
          }
          function searchDate() {
               return new Promise((resolve) => {
                    const searchDate = arrayEmployes.filter((employe) => {
                         if (employe.date.includes(userInput)) {
                              return employe;
                         }
                    });

                    return resolve(searchDate);
               });
          }
          function searchStreet() {
               return new Promise((resolve) => {
                    const searchStreet = arrayEmployes.filter((employe) => {
                         if (employe.street.toLowerCase().includes(userInput)) {
                              return employe;
                         }
                    });

                    return resolve(searchStreet);
               });
          }
          function searchZipCode() {
               return new Promise((resolve) => {
                    const searchZipCode = arrayEmployes.filter((employe) => {
                         if (employe.zipCode.includes(userInput)) {
                              return employe;
                         }
                    });

                    return resolve(searchZipCode);
               });
          }
          function searchSelect() {
               return new Promise((resolve) => {
                    const searchSelect = arrayEmployes.filter((employe) => {
                         if (employe.select.toLowerCase().includes(userInput)) {
                              return employe;
                         }
                    });

                    return resolve(searchSelect);
               });
          }
          function searchCity() {
               return new Promise((resolve) => {
                    const searchCity = arrayEmployes.filter((employe) => {
                         if (employe.city.toLowerCase().includes(userInput)) {
                              return employe;
                         }
                    });

                    return resolve(searchCity);
               });
          }
          Promise.all([
               searchFirstName(),
               searchLastName(),
               searchStartDate(),
               searchDate(),
               searchCity(),
               searchDepartment(),
               searchSelect(),
               searchStreet(),
               searchZipCode(),
          ]).then((result) => {
               result = [
                    ...result[0],
                    ...result[1],
                    ...result[2],
                    ...result[3],
                    ...result[4],
                    ...result[5],
                    ...result[6],
                    ...result[7],
                    ...result[8],
               ];
               console.log(result);

               const filterDoublon = [...new Set(result)];

               return resolve(filterDoublon), console.log(filterDoublon);
          });
     });
}
