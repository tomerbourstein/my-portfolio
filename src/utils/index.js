export const scrollToId = (event, id) => {
    event.preventDefault();
    let section = document.getElementById(id);
    section && section.scrollIntoView({ behavior: "smooth" }, true);
  };