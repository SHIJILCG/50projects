const uluser = document.getElementById("user-list");
getuser();
async function getuser() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const data = res.json();
  console.log(data);
}
