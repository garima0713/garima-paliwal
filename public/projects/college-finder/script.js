// ======================
// DARK MODE
// ======================

const darkBtn = document.getElementById("darkBtn");

if (darkBtn) {

  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark");
  }

  darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("dark")
        ? "on"
        : "off"
    );

  });

}


// ======================
// ELEMENTS
// ======================

const stateFilter =
  document.getElementById("stateFilter");

const districtFilter =
  document.getElementById("districtFilter");

const searchInput =
  document.getElementById("searchInput");

const collegeContainer =
  document.querySelector(".college-container");

const suggestionsBox =
  document.getElementById("suggestions");


// ======================
// COLLEGES DATA
// ======================

const colleges = window.colleges || [];

// ======================
// LOAD STATES
// ======================

function loadStates() {

  if (!stateFilter) return;

  Object.keys(districts).forEach(state => {

    stateFilter.innerHTML += `
      <option value="${state}">
        ${state.toUpperCase()}
      </option>
    `;

  });

}


// ======================
// UPDATE DISTRICTS
// ======================

function updateDistricts() {

  if (!districtFilter) return;

  const state =
    stateFilter.value;

  districtFilter.innerHTML = `
    <option value="all">
      Select District
    </option>
  `;

  if (
    state !== "all" &&
    districts[state]
  ) {

    districts[state].forEach(district => {

      districtFilter.innerHTML += `
        <option value="${district}">
          ${district.toUpperCase()}
        </option>
      `;

    });

  }

}


// ======================
// FILTER COLLEGES
// ======================

function filterColleges() {

  if (!collegeContainer) return;

  const search =
    searchInput ?
    searchInput.value.toLowerCase() :
    "";

  const state =
    stateFilter ?
    stateFilter.value :
    "all";

  const district =
    districtFilter ?
    districtFilter.value :
    "all";

  const filtered = colleges.filter(college => {

    const matchSearch =
      college.name
      .toLowerCase()
      .includes(search);

    const matchState =
      state === "all" ||
      college.state === state;

    const matchDistrict =
      district === "all" ||
      college.district === district;

    return (
      matchSearch &&
      matchState &&
      matchDistrict
    );

  });

  displayColleges(filtered);

}


// ======================
// SEARCH SUGGESTIONS
// ======================

if (searchInput && suggestionsBox) {

  searchInput.addEventListener("input", () => {

    const value =
      searchInput.value.toLowerCase();

    suggestionsBox.innerHTML = "";

    if (value === "") return;

    const matches =
      colleges.filter(college =>
        college.name
        .toLowerCase()
        .includes(value)
      );

    matches.forEach(college => {

      const div =
        document.createElement("div");

      div.textContent =
        college.name;

      div.onclick = () => {

        searchInput.value =
          college.name;

        suggestionsBox.innerHTML =
          "";

        if (stateFilter) {
          stateFilter.value =
            college.state;
        }

        updateDistricts();

        if (districtFilter) {
          districtFilter.value =
            college.district;
        }

        filterColleges();

      };

      suggestionsBox.appendChild(div);

    });

  });

}

// ======================
// OPEN DETAILS PAGE
// ======================

function openDetails(
  name,
  place,
  fees,
  exam,
  placement,
  image
){

  const collegeData = {
    name,
    place,
    fees,
    exam,
    placement,
    image
  };

  localStorage.setItem(
    "selectedCollege",
    JSON.stringify(collegeData)
  );

  window.location.href = "details.html";

}

// ======================
// DISPLAY COLLEGES
// ======================

function displayColleges(data){

  if(!collegeContainer) return;

  collegeContainer.innerHTML = "";

  if(data.length === 0){

    collegeContainer.innerHTML =
    `<h2 class="noCollege">
      No Colleges Found
    </h2>`;

    return;
  }

  const favs =
  JSON.parse(
    localStorage.getItem("favs")
  ) || [];

  data.forEach(college=>{

    const isFav =
    favs.includes(college.name);

    collegeContainer.innerHTML += `

    <div class="card">

      <img
        src="${college.image}"
        alt="${college.name}"
      >

      <h3>${college.name}</h3>

      <p>📍 ${college.place}</p>

      <p>💰 Fees: ${college.fees}</p>

      <p>📝 Exam: ${college.exam}</p>

      <p>📊 Placement: ${college.placement}</p>

      <div class="btns">

        <button
          class="applyBtn"
          onclick="openDetails(
            '${college.name}',
            '${college.place}',
            '${college.fees}',
            '${college.exam}',
            '${college.placement}',
            '${college.image}'
          )"
        >
          View Details
        </button>

        <button
          class="favBtn ${isFav ? 'active' : ''}"
          onclick="toggleFav(this,'${college.name}')"
        >
          ❤️
        </button>

      </div>

    </div>

    `;

  });

}

// ======================
// FAVORITES
// ======================

function toggleFav(btn,name){

  let favs =
  JSON.parse(
    localStorage.getItem("favs")
  ) || [];

  if(favs.includes(name)){

    favs =
    favs.filter(
      item => item !== name
    );

    btn.classList.remove("active");

  }else{

    favs.push(name);

    btn.classList.add("active");

    btn.classList.add("pop");

    setTimeout(()=>{
      btn.classList.remove("pop");
    },400);

  }

  localStorage.setItem(
    "favs",
    JSON.stringify(favs)
  );

}

// ======================
// INIT
// ======================

if(stateFilter){
  loadStates();
  updateDistricts();
}

if(collegeContainer){
  displayColleges(colleges);
}

// ======================
// DETAILS PAGE DATA
// ======================

const college =
JSON.parse(
  localStorage.getItem("selectedCollege")
);

if(
  college &&
  document.getElementById("collegeTitle")
){

  document.getElementById("collegeTitle").textContent =
  college.name;

  document.getElementById("collegePlace").textContent =
  college.place;

  document.getElementById("collegeFees").textContent =
  college.fees;

  document.getElementById("collegeExam").textContent =
  college.exam;

  document.getElementById("collegePlacement").textContent =
  college.placement;

  document.getElementById("collegeImg").src =
  college.image;

}
// Auto Open Dashboard If Logged In

if(
  localStorage.getItem("isLoggedIn")==="true" &&
  window.location.pathname.includes("index.html")
){
  window.location.href="dashboard.html";
}