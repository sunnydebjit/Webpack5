import logo from "../../assets/git.svg";

function Git() {
  let __git = document.createElement("img");
  __git.src = logo;
  __git.alt = "View on Github";
  __git.className = "absolute";
  return __git;
}

export default Git;
