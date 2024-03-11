function createContact() {
    const contact = document.createElement('section')
    contact.classList.add('contact__section')
  
    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '+1 888 6856 319'
  
    const address = document.createElement('p')
    address.textContent = 'Somewhere, Somewhere City, Somewhere Lane, SomeCountry'
  
    const restaurantLocation = document.createElement('img')
    restaurantLocation.src = 'images/map.png'
    restaurantLocation.alt = 'Datina Location'
  
    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(restaurantLocation)
  
    return contact
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;