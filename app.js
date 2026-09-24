(() => {
  const status = document.getElementById("status");
  if (!status) return;

  const when = new Date().toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });

  status.textContent = `SPA loaded · ${when}`;
})();
