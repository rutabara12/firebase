const usersList = document.querySelector("#user-list");
const form = document.querySelector("#add-user");

function getUsers(doc) {
  let li = document.createElement("li");
  let fname = document.createElement("span");
  let lname = document.createElement("span");

  li.setAttribute("data-id", doc.id);
  fname.textContent = doc.data().firstName;
  lname.textContent = doc.data().lastName;

  li.appendChild(fname);
  li.appendChild(lname);

  usersList.appendChild(li);
}

// getting data
db.collection("users")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      getUsers(doc);
    });
  });
// saving data
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   let user = {firstName: form.fname.value, lastName: form.lname.value};

  db.collection("users").add({
    firstName: form.fname.value,
    lastName: form.lname.value,
  });
  form.fname.value = "";
  form.lname.value = "";
});
