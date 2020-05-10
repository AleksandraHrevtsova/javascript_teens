// имитация нереляционной базы данных
const userA = {
  name: "user name",
  phone: "xxx-xxx-xx-xx",
  email: "email@gmail.com",
  avatar:
    "https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  address: {
    country: "Country",
    city: "City",
  },
};

const userB = {
  name: "user name",
  phone: "xxx-xxx-xx-xx",
  email: "email@gmail.com",
  avatar:
    "https://images.pexels.com/photos/2439563/pexels-photo-2439563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  address: {
    country: "Country",
    city: "City",
  },
};

// ОБРАТИМСЯ К УЗЛУ-ЭЛЕМЕНТУ div, в который будут записываться профили наших юзеров
const profileContainer = document.querySelector(".profile-container");
console.log(profileContainer);

const profileA = createUserProfile(userA);
const profileB = createUserProfile(userB);

// запишем профили наших полученных из БД юзеров в узел-элемент
profileContainer.append(profileA, profileB);

// // СОЗДАДИМ ФУНКЦИЮ, ГЕНЕРИРУЮЩУЮ ПРОФИЛЬ ЮЗЕРА
function createUserProfile({ avatar, name, phone, email, address }) {
  // сначала создадим обертку для профиля юзера
  const container = document.createElement("div");
  // задаем обертке класс
  container.classList.add("user-profile");
  console.log(
    "мы создали узел для добавления нового пользователя: ",
    container
  );
  // создаем img для аватара (фото профиля)
  const profileImage = document.createElement("img");
  profileImage.src = avatar;
  profileImage.alt = "user image";
  profileImage.classList.add("profile-image");
  console.log("аватар юзера (фото профиля)", profileImage);
  // создаем список с инфо пользователя
  const infoList = document.createElement("ul");
  // задаем ему класс
  infoList.classList.add("info");
  console.log("обёртка для полей юзера", infoList);
  // объявляем переменные, генерирующие поля со значениями
  const nameField = createInfoItem("Name: ", name);
  const phoneField = createInfoItem("Phone: ", phone);
  const emailField = createInfoItem("Email: ", email);
  const addressField = createInfoItem(
    "Address: ",
    `${address.country}, ${address.city}`
  );
  // записываем в список динамичные элементы из функции createInfoItem
  // с присвоением деструктуризированных значений из объекта user полученного юзера (имитация БД)
  infoList.append(nameField, phoneField, emailField, addressField);
  // записываем аватар и список с данными в профиль юзера
  container.append(profileImage, infoList);
  console.log(container);
  // возвращаем готовый профиль с инфо юзера
  return container;
}

// // СОЗДАДИМ ФУНКЦИЮ ДЛЯ ГЕНЕРАЦИИ ПОЛЯ С ДАННЫМИ ЮЗЕРА
function createInfoItem(label, text) {
  // создаем динамичный узел-элемент списка для функции createUserProfile
  const item = document.createElement("li");
  // в элементе тег b с описанием
  const title = document.createElement("b");
  title.textContent = `${label}`;
  // создаем текстовый элемент для указания данных юзера
  const itemText = document.createTextNode(text);
  // записываем в элемент значение тега b (описание поля) и значение поля юзера
  item.append(title, itemText);
  // возвращаем готовый элемент списка
  return item;
}

// ==================
//   const nameField = document.createElement("li");
//   const label = document.createElement("b");
//   label.textContent = "Name: ";
//   const nameFieldTextContent = document.createTextNode("Omar Halem");

//   nameField.appendChild(label);
//   nameField.appendChild(nameFieldTextContent);
//   nameField.append(label, nameFieldTextContent);

//   infoList.appendChild(nameField);
//   container.appendChild(profileImage);
//   container.appendChild(infoList);
// ==================
