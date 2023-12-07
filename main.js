function onClassChangeClick (className) {
  document.body.className = "";
  document.body.classList.add(className);
}

onClassChangeClick(window.location.hash.slice(1) || "first");
