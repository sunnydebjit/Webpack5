function Injector(ClassName, Component) {
  const container = document.querySelector(ClassName);
  container.appendChild(Component);
  console.log("__Injector has Injected the Git Logo");
}

export default Injector;
