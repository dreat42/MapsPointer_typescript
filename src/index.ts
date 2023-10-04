import  User  from "./User";

import  Company  from "./Company";


const user = new User()

const company = new Company()


const map = new google.maps.Map(document.getElementById('root') as HTMLElement, {
    zoom: 1,
    center: {
      lat: 0,
      lng:  0,
    },
  });

  const markerUser = new google.maps.Marker({
    position: {
      lat: user.location.lat,
      lng: user.location.lng,
    },
    map: map, 
    title: user.name
  });

  const markerCompany = new google.maps.Marker({
    position: {
      lat: company.location.lat,
      lng: company.location.lng,
    },
    map: map, 
    title: company.company_name
  });


  markerUser.addListener('click', () => {
    alert(user.name);
  });


  markerCompany.addListener('click', () => {
    alert(company.company_name);
  });

