export function getFirstName(arraysInformation) {
     return new Promise((resolve, reject) => {
          const name = arraysInformation.sort((a, b) => {
               a = a.firstName.toLowerCase();

               b = b.firstName.toLowerCase();

               if (a > b) {
                    return 1;
               }
               if (a < b) {
                    return -1;
               }
               if (a === b) {
                    return 0;
               }
          });

          return resolve(name), console.log(name);
     });
}
export function getLastName(arraysInformation) {
     return new Promise((resolve, reject) => {
          const name = arraysInformation.sort((a, b) => {
               a = a.lastName.toLowerCase();
               console.log(a);

               b = b.lastName.toLowerCase();

               if (a > b) {
                    return 1;
               }
               if (a < b) {
                    return -1;
               }
               if (a === b) {
                    return 0;
               }
          });
          return resolve(name);
     });
}
export function getStartDate(arraysInformation) {
     return new Promise((resolve, reject) => {
          const name = arraysInformation.sort((a, b) => {
               a = a.department.toLowerCase();
               console.log(a);

               b = b.department.toLowerCase();

               if (a > b) {
                    return 1;
               }
               if (a < b) {
                    return -1;
               }
               if (a === b) {
                    return 0;
               }
          });
          return resolve(name);
     });
}

export function getDepartment(arraysInformation) {
     return new Promise((resolve, reject) => {
          const name = arraysInformation.sort((a, b) => {
               a = a.startdate.toLowerCase();
               console.log(a);

               b = b.startdate.toLowerCase();

               if (a > b) {
                    return 1;
               }
               if (a < b) {
                    return -1;
               }
               if (a === b) {
                    return 0;
               }
          });
          return resolve(name);
     });
}
export function getDate(arraysInformation) {
     return new Promise((resolve, reject) => {
          const name = arraysInformation.sort((a, b) => {
               a = a.date.toLowerCase();
               console.log(a);

               b = b.date.toLowerCase();

               if (a > b) {
                    return 1;
               }
               if (a < b) {
                    return -1;
               }
               if (a === b) {
                    return 0;
               }
          });
          return resolve(name), console.log(name);
     });
}
export function getStreet(arraysInformation) {
     return new Promise((resolve, reject) => {
          const name = arraysInformation.sort((a, b) => {
               a = a.street.toLowerCase();
               console.log(a);

               b = b.street.toLowerCase();

               if (a > b) {
                    return 1;
               }
               if (a < b) {
                    return -1;
               }
               if (a === b) {
                    return 0;
               }
          });
          return resolve(name), console.log(name);
     });
}
export function getZipCode(arraysInformation) {
     return new Promise((resolve, reject) => {
          const name = arraysInformation.sort((a, b) => {
               a = a.zipCode;
               console.log(a);

               b = b.zipCode;
               return a - b;
          });
          return resolve(name), console.log(name);
     });
}
export function getSelect(arraysInformation) {
     return new Promise((resolve, reject) => {
          const name = arraysInformation.sort((a, b) => {
               a = a.select.toLowerCase();
               console.log(a);

               b = b.select.toLowerCase();

               if (a > b) {
                    return 1;
               }
               if (a < b) {
                    return -1;
               }
               if (a === b) {
                    return 0;
               }
          });
          return resolve(name), console.log(name);
     });
}
export function getCity(arraysInformation) {
     return new Promise((resolve, reject) => {
          const name = arraysInformation.sort((a, b) => {
               a = a.city.toLowerCase();
               console.log(a);

               b = b.city.toLowerCase();

               if (a > b) {
                    return 1;
               }
               if (a < b) {
                    return -1;
               }
               if (a === b) {
                    return 0;
               }
          });
          return resolve(name), console.log(name);
     });
}
