import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { NavLink, BrowserRouter } from 'react-router-dom';

function getFirstName(arraysInformation) {
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
function getLastName(arraysInformation) {
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
function getStartDate(arraysInformation) {
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
function getDepartment(arraysInformation) {
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
function getDate(arraysInformation) {
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
function getStreet(arraysInformation) {
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
function getZipCode(arraysInformation) {
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
function getSelect(arraysInformation) {
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
function getCity(arraysInformation) {
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

function normalize(string) {
  string = string.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  string = string.replace(/œ/g, "oe").replace(/æ/g, "ae").replace(/[']/g, " ");
  return string;
}

function searchElement(userInput) {
  let arrayEmployes = JSON.parse(localStorage.getItem("employesId"));
  return new Promise((resolve, reject) => {
    userInput = normalize(userInput);
    function searchFirstName() {
      return new Promise(resolve => {
        const searchFirstName = arrayEmployes.filter(employe => {
          if (employe.firstName.toLowerCase().includes(userInput)) {
            return employe;
          }
        });
        return resolve(searchFirstName), console.log(searchFirstName);
      });
    }
    function searchLastName() {
      return new Promise(resolve => {
        const searchLastName = arrayEmployes.filter(employe => {
          if (employe.lastName.toLowerCase().includes(userInput)) {
            return employe;
          }
        });
        return resolve(searchLastName);
      });
    }
    function searchStartDate() {
      return new Promise(resolve => {
        const searchStartDate = arrayEmployes.filter(employe => {
          if (employe.department.toLowerCase().includes(userInput)) {
            return employe;
          }
        });
        return resolve(searchStartDate);
      });
    }
    function searchDepartment() {
      return new Promise(resolve => {
        const searchDepartment = arrayEmployes.filter(employe => {
          if (employe.startdate.includes(userInput)) {
            return employe;
          }
        });
        return resolve(searchDepartment);
      });
    }
    function searchDate() {
      return new Promise(resolve => {
        const searchDate = arrayEmployes.filter(employe => {
          if (employe.date.includes(userInput)) {
            return employe;
          }
        });
        return resolve(searchDate);
      });
    }
    function searchStreet() {
      return new Promise(resolve => {
        const searchStreet = arrayEmployes.filter(employe => {
          if (employe.street.toLowerCase().includes(userInput)) {
            return employe;
          }
        });
        return resolve(searchStreet);
      });
    }
    function searchZipCode() {
      return new Promise(resolve => {
        const searchZipCode = arrayEmployes.filter(employe => {
          if (employe.zipCode.includes(userInput)) {
            return employe;
          }
        });
        return resolve(searchZipCode);
      });
    }
    function searchSelect() {
      return new Promise(resolve => {
        const searchSelect = arrayEmployes.filter(employe => {
          if (employe.select.toLowerCase().includes(userInput)) {
            return employe;
          }
        });
        return resolve(searchSelect);
      });
    }
    function searchCity() {
      return new Promise(resolve => {
        const searchCity = arrayEmployes.filter(employe => {
          if (employe.city.toLowerCase().includes(userInput)) {
            return employe;
          }
        });
        return resolve(searchCity);
      });
    }
    Promise.all([searchFirstName(), searchLastName(), searchStartDate(), searchDate(), searchCity(), searchDepartment(), searchSelect(), searchStreet(), searchZipCode()]).then(result => {
      result = [...result[0], ...result[1], ...result[2], ...result[3], ...result[4], ...result[5], ...result[6], ...result[7], ...result[8]];
      console.log(result);
      const filterDoublon = [...new Set(result)];
      return resolve(filterDoublon), console.log(filterDoublon);
    });
  });
}

const Pagination = _ref => {
  let {
    totalPosts,
    setCurrentPages
  } = _ref;
  let pages = [];
  for (let i = 1; i <= totalPosts; i++) {
    pages.push(i);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, pages.map((page, index) => {
    return /*#__PURE__*/React.createElement("span", {
      key: index,
      onClick: () => setCurrentPages(page)
    }, page);
  }));
};

var CurrentEmployes = function CurrentEmployes(_ref) {
  var searchInformationEmploye = function searchInformationEmploye() {
    try {
      var inputt = document.querySelector(".input");
      var timeOut = null;
      clearTimeout(timeOut);
      timeOut = setTimeout(function () {
        inputt.addEventListener("input", function (event) {
          var error = document.querySelector(".error");
          console.log(error);
          var search = event.target.value;
          if (search.length > 0) {
            return searchElement(search).then(function (response) {
              setStartDate(response);
              setError(response);
            });
          }
          return setStartDate(arrayUseStore);
        });
      }, 1000);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var changes = function changes() {
    try {
      var trEmployes = document.querySelector(".trEmployes");
      var clicked = false;
      trEmployes.addEventListener("click", function (event) {
        if (event.target !== event.currentTarget) {
          var employes = event.target.className;
          if (employes === "firstName" && !clicked) {
            clicked = true;
            getFirstName(posts).then(function (response) {
              return setStartDate(response), console.log(true), console.log(response);
            });
          } else if (employes === "lastName" && !clicked) {
            clicked = true;
            return getLastName(arrayEmployes).then(function (response) {
              return setStartDate(response);
            });
          } else if (employes === "startDate" && !clicked) {
            clicked = true;
            return getStartDate(arrayEmployes).then(function (response) {
              return setStartDate(response);
            });
          } else if (employes === "department" && !clicked) {
            clicked = true;
            return getDepartment(arrayEmployes).then(function (response) {
              return setStartDate(response);
            });
          } else if (employes === "dateOfBirth" && !clicked) {
            clicked = true;
            return getDate(arrayEmployes).then(function (response) {
              return setStartDate(response);
            });
          } else if (employes === "street" && !clicked) {
            clicked = true;
            return getStreet(arrayEmployes).then(function (response) {
              return setStartDate(response);
            });
          } else if (employes === "city" && !clicked) {
            clicked = true;
            return getCity(arrayEmployes).then(function (response) {
              return setStartDate(response);
            });
          } else if (employes === "select" && !clicked) {
            clicked = true;
            return getSelect(arrayEmployes).then(function (response) {
              return setStartDate(response);
            });
          } else if (employes === "zipCode" && !clicked) {
            clicked = true;
            return getZipCode(arrayEmployes).then(function (response) {
              return setStartDate(response);
            });
          } else {
            clicked = false;
            console.log(false);
            return setStartDate(arrayUseStore);
          }
        }
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var arrayEmployes = _ref.arrayEmployes,
    arrayUseStore = _ref.arrayUseStore;
  var _useState = useState(arrayEmployes),
    posts = _useState[0],
    setStartDate = _useState[1];
  var _useState2 = useState(1),
    currentPages = _useState2[0],
    setCurrentPages = _useState2[1];
  var _useState3 = useState(3),
    postInfos = _useState3[0],
    setPostInfos = _useState3[1];
  var _useState4 = useState(false),
    error = _useState4[0],
    setError = _useState4[1];
  var lastPages = currentPages * postInfos;
  var firstPages = lastPages - postInfos;
  var currentData = posts.slice(firstPages, lastPages);
  var arrayOption = [3, 5, 10, 15, 25];
  useEffect(function () {
    var abortController = new AbortController();
    changes().then(function (response) {
      return response;
    });
    searchInformationEmploye().then(function (response) {
      return response;
    });
    return function () {
      abortController.abort();
    };
  }, []);
  var nbrpages = Math.ceil(posts.length / postInfos);
  function next() {
    if (currentPages !== nbrpages) {
      return setCurrentPages(currentPages + 1), console.log(currentPages + 1);
    }
  }
  function prev() {
    if (currentPages !== 1) {
      return setCurrentPages(currentPages - 1), console.log(currentPages + 1);
    }
  }
  var handleChange = function handleChange(event) {
    console.log(event.target.value);
    setPostInfos(event.target.value);
  };
  var currentemployes = {
    width: "1000px",
    margin: "auto",
    paddingTop: "50px",
    display: "flex",
    flexDirection: "column",
    gap: "30px"
  };
  var titleEmployes = {
    textAlign: "center"
  };
  var divStyle = {
    display: "flex",
    justifyContent: "space-between"
  };
  var parentSelect = {
    display: "flex",
    gap: "3px"
  };
  var parentSearch = {
    display: "flex",
    gap: "3px"
  };
  var entriesPrevious = {
    display: "flex",
    justifyContent: "space-between"
  };
  var entries = {
    display: "flex",
    gap: "5px"
  };
  var previous = {
    display: "flex",
    gap: "8px",
    alignItems: "center"
  };
  var nextt = {
    cursor: "pointer"
  };
  var home = {
    margin: "auto"
  };
  var childprevious = {
    padding: "10px",
    background: "darkgray",
    textAlign: "center",
    cursor: "pointer"
  };
  var errorrs = {
    display: "block",
    position: "absolute",
    left: "35%",
    top: "40%",
    color: "red",
    fontSize: "40px"
  };
  var table = {
    padding: "5px",
    border: "2px solid #79526f",
    lineHeight: "35px",
    borderCollapse: "collapse",
    width: "100%"
  };
  var td = {
    background: "blanchedalmond",
    borderCollapse: "collapse",
    border: "2px solid skyblue",
    color: "black",
    height: "100px",
    fontSize: "15px",
    padding: "3px",
    width: "100px"
  };
  var th = {
    background: "blue",
    color: "white",
    height: "70px",
    fontSize: "15px",
    padding: "5px",
    cursor: "pointer",
    width: "100px",
    borderRight: "1px solid white"
  };
  var tr = {
    textAlign: "center",
    display: "flex",
    width: "100% !important",
    justifyContent: "space-between"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "currentemployes",
    style: currentemployes
  }, /*#__PURE__*/React.createElement("div", {
    className: "titleEmployes",
    style: titleEmployes
  }, /*#__PURE__*/React.createElement("h1", null, "Current Employees")), /*#__PURE__*/React.createElement("div", {
    style: divStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "parentSelect",
    style: parentSelect
  }, /*#__PURE__*/React.createElement("span", null, "show"), /*#__PURE__*/React.createElement("select", {
    onChange: handleChange
  }, arrayOption.map(function (option, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: index,
      value: option
    }, option);
  })), /*#__PURE__*/React.createElement("span", null, "entries")), /*#__PURE__*/React.createElement("div", {
    className: "parentSearch",
    style: parentSearch
  }, /*#__PURE__*/React.createElement("span", null, "search:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "input"
  }))), /*#__PURE__*/React.createElement("table", {
    style: table
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "trEmployes",
    style: tr
  }, /*#__PURE__*/React.createElement("th", {
    className: "firstName",
    style: th,
    role: "columnheader"
  }, "firstName"), /*#__PURE__*/React.createElement("th", {
    className: "lastName",
    style: th,
    role: "columnheader"
  }, "lastName"), /*#__PURE__*/React.createElement("th", {
    className: "startDate",
    style: th,
    role: "columnheader"
  }, "startDate"), /*#__PURE__*/React.createElement("th", {
    className: "department",
    style: th,
    role: "columnheader"
  }, "department"), /*#__PURE__*/React.createElement("th", {
    className: "dateOfBirth",
    style: th,
    role: "columnheader"
  }, "dateOfBirth", " "), /*#__PURE__*/React.createElement("th", {
    className: "street",
    style: th,
    role: "columnheader"
  }, "street"), /*#__PURE__*/React.createElement("th", {
    className: "city",
    style: th,
    role: "columnheader"
  }, "city"), /*#__PURE__*/React.createElement("th", {
    className: "select",
    style: th,
    role: "columnheader"
  }, "state"), /*#__PURE__*/React.createElement("th", {
    className: "zipCode",
    style: th,
    role: "columnheader"
  }, "zipCode"))), /*#__PURE__*/React.createElement("tbody", {
    "aria-hidden": "true"
  }, currentData.map(function (card, index) {
    return /*#__PURE__*/React.createElement("tr", {
      key: index,
      className: "tr",
      style: tr
    }, /*#__PURE__*/React.createElement("td", {
      "data-label": "firstName",
      style: td
    }, card.firstName), /*#__PURE__*/React.createElement("td", {
      "data-label": "lastName",
      style: td
    }, card.lastName), /*#__PURE__*/React.createElement("td", {
      "data-label": "startDate",
      style: td
    }, card.startdate), /*#__PURE__*/React.createElement("td", {
      "data-label": "Compta",
      style: td
    }, card.department), /*#__PURE__*/React.createElement("td", {
      "data-label": "date",
      style: td
    }, card.date), /*#__PURE__*/React.createElement("td", {
      "data-label": "street",
      style: td
    }, card.street), /*#__PURE__*/React.createElement("td", {
      "data-label": "city",
      style: td
    }, card.city), /*#__PURE__*/React.createElement("td", {
      "data-label": "select",
      style: td
    }, card.select), /*#__PURE__*/React.createElement("td", {
      "data-label": "zipCode",
      style: td
    }, card.zipCode));
  }))), /*#__PURE__*/React.createElement("span", {
    className: "error",
    style: error.length === 0 ? {
      errorrs: errorrs
    } : {
      display: "none"
    }
  }, "No matching records found"), /*#__PURE__*/React.createElement("div", {
    style: entriesPrevious
  }, /*#__PURE__*/React.createElement("div", {
    className: "entries",
    style: entries
  }, /*#__PURE__*/React.createElement("span", null, "showing"), /*#__PURE__*/React.createElement("span", null, firstPages + 1), /*#__PURE__*/React.createElement("span", null, "to"), /*#__PURE__*/React.createElement("span", null, lastPages <= posts.length ? lastPages : posts.length), /*#__PURE__*/React.createElement("span", null, "of"), /*#__PURE__*/React.createElement("span", null, posts.length), /*#__PURE__*/React.createElement("span", null, "entries")), /*#__PURE__*/React.createElement("div", {
    className: "previous",
    style: previous
  }, /*#__PURE__*/React.createElement("span", {
    className: "next",
    style: nextt,
    onClick: prev
  }, "previous"), /*#__PURE__*/React.createElement(Pagination, {
    totalPosts: nbrpages,
    setCurrentPages: setCurrentPages,
    style: childprevious
  }), /*#__PURE__*/React.createElement("span", {
    className: "next",
    style: nextt,
    onClick: next
  }, "next"))), /*#__PURE__*/React.createElement("div", {
    className: "home",
    style: home
  }, /*#__PURE__*/React.createElement(NavLink, {
    to: "/employes"
  }, "home")));
};

function App() {
  var arrayEmployes = JSON.parse(localStorage.getItem("employesId"));
  var arrayUseStore = JSON.parse(localStorage.getItem("employesId"));
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(CurrentEmployes, {
    arrayEmployes: arrayEmployes,
    arrayUseStore: arrayUseStore
  })));
}

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null)));
//# sourceMappingURL=index.modern.js.map
