window.onload = function () {
  var districtOptions = {
    Province1: [
      "Bhojpur",
      "Dhankuta",
      "Ilam",
      "Jhapa",
      "Khotang",
      "Morang",
      "Okhaldhunga",
      "Panchthar",
      "Sankhuwasabha",
      "Solukhumbu",
      "Sunsari",
      "Taplejung",
      "Terhathum",
      "Udayapur",
    ],
    Province2: [
      "Bara",
      "Dhanusa",
      "Mahottari",
      "Parsa",
      "Rautahat",
      "Saptari",
      "Sarlahi",
      "Siraha",
    ],
    Province3: [
      "Bhaktapur",
      "Dhading",
      "Kathmandu",
      "Kavrepalanchok",
      "Lalitpur",
      "Nuwakot",
      "Rasuwa",
      "Sindhuli",
      "Sindhupalchok",
    ],
    Province4: [
      "Baglung",
      "Gorkha",
      "Kaski",
      "Lamjung",
      "Manang",
      "Mustang",
      "Myagdi",
      "Nawalpur",
      "Parbat",
      "Syangja",
      "Tanahun",
    ],
    Province5: [
      "Arghakhanchi",
      "Banke",
      "Bardiya",
      "Dang",
      "Eastern Rukum",
      "Gulmi",
      "Kapilvastu",
      "Parasi",
      "Palpa",
      "Pyuthan",
      "Rolpa",
      "Rupandehi",
    ],
    Province6: [
      "Dolpa",
      "Humla",
      "Jumla",
      "Kalikot",
      "Mugu",
      "Salyan",
      "Surkhet",
      "Western Rukum",
    ],
    Province7: [
      "Achham",
      "Baitadi",
      "Bajhang",
      "Bajura",
      "Dadeldhura",
      "Darchula",
      "Doti",
      "Kailali",
      "Kanchanpu",
    ],
  };

  function updateDistricts() {
    var stateSelect = document.getElementById("state");
    var districtSelect = document.getElementById("district");
    var selectedState = stateSelect.value;

    districtSelect.innerHTML = "";

    var districts = districtOptions[selectedState];
    for (var i = 0; i < districts.length; i++) {
      var option = document.createElement("option");
      option.value = districts[i];
      option.text = districts[i];
      districtSelect.add(option);
    }
  }

  updateDistricts();
};

var btn = document.getElementById("btn");
var donorContainer = document.getElementById("donor-container");
var bankContainer = document.getElementById("bank-container");

function leftClick() {
  btn.style.left = "0";
  donorContainer.style.display = "block";
  bankContainer.style.display = "none";
  populateDonorDetails(); // Call a function to populate donor details
}

function rightClick() {
  btn.style.left = "50%";
  donorContainer.style.display = "none";
  bankContainer.style.display = "block";
  populateBankDetails(); // Call a function to populate blood bank details
}

function populateDonorDetails() {
  const donorData = [
    {
      name: "Hari Bahadur",
      location: "Lalitpur, Imadol",
      contact: "98185429807",
    },
    {
      name: "Sita Sharma",
      location: "Kathmandu, New Road",
      contact: "9841567890",
    },
    // Add more donor objects as needed
  ];

  donorContainer.innerHTML = ""; // Clear previous entries

  if (donorData.length > 0) {
    donorData.forEach((donor) => {
      const donorElement = document.createElement("div");
      donorElement.innerHTML = `
              <h5>${donor.name}</h5>
              <p>${donor.location}</p>
              <p>${donor.contact}</p>
            `;
      donorContainer.appendChild(donorElement);
    });
  } else {
    donorContainer.innerHTML = "<p>No donors available</p>";
  }
}

function populateBankDetails() {
  const bankData = [
    {
      name: "Bhaktapur NRCS Blood Bank",
      location: "Bhaktapur",
      contact: "01-6611661, 01-6612266",
    },
    {
      name: "Central NRCS Blood Bank",
      location: "Soaltee-Mode",
      contact: "01-4288485",
    },
    {
      name: "Lalitpur NRCS Blood Bank",
      location: "Pulchowk",
      contact: "+97715427033",
    },
    {
      name: "Teaching Hospital",
      location: "Maharajgunj, Kathmandu",
      contact: "01-44123030, 01-4410911",
    },
  ];

  bankContainer.innerHTML = ""; // Clear previous entries

  if (bankData.length > 0) {
    bankData.forEach((bank) => {
      const bankElement = document.createElement("div");
      bankElement.innerHTML = `
              <h5>${bank.name}</h5>
              <p>${bank.location}</p>
              <p>${bank.contact}</p>
            `;
      bankContainer.appendChild(bankElement);
    });
  } else {
    bankContainer.innerHTML = "<p>No blood banks available</p>";
  }
}
