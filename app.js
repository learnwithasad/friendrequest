let user = document.querySelector("h3");
let addFriend = document.querySelector("#add");
let removeFriend = document.querySelector("#remove");

addFriend.addEventListener("click", () => {
  user.innerText = "Friend";
  user.style.color = "green";
});

removeFriend.addEventListener("click", () => {
  user.innerText = "Stranger";
  user.style.color = "red";
});
