const dialog = document.getElementById("leaflet");
const $ = (id) => document.getElementById(id);
let opener = null;

function openLeaflet(key, button) {
  const p = PRODUCTS[key];
  if (!p) return;
  opener = button;

  $("leaflet-title").textContent = p.title;
  const photo = $("leaflet-photo");
  photo.src = p.img;
  photo.alt = p.alt;
  const buy = $("leaflet-buy");
  buy.textContent = p.buy[0];
  buy.href = p.buy[1];

  const dl = $("leaflet-facts");
  dl.replaceChildren(...p.facts.flatMap(([k, v]) => {
    const dt = document.createElement("dt"); dt.textContent = k;
    const dd = document.createElement("dd"); dd.textContent = v;
    return [dt, dd];
  }));

  $("leaflet-body").replaceChildren(...p.body.map((t) => {
    const el = document.createElement("p"); el.textContent = t; return el;
  }));

  const ex = $("leaflet-extra");
  ex.hidden = !p.extra;
  if (p.extra) {
    $("extra-title").textContent = p.extra.title;
    $("extra-quote").textContent = p.extra.quote;
    $("extra-who").textContent = p.extra.who;
    $("extra-text").replaceChildren(...p.extra.text.map((t) => {
      const el = document.createElement("p"); el.textContent = t; return el;
    }));
  }

  $("leaflet-groups").replaceChildren(...p.groups.flatMap(([k, v]) => {
    const dt = document.createElement("dt"); dt.textContent = k;
    const dd = document.createElement("dd"); dd.textContent = v;
    return [dt, dd];
  }));

  $("leaflet-stamp").textContent = p.stamp;
  $("leaflet-tested").textContent = p.tested;

  $("leaflet-sources").replaceChildren(...p.sources.map(([label, href]) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = href; a.textContent = label; a.target = "_blank"; a.rel = "noopener";
    li.append(a); return li;
  }));

  dialog.showModal();
  dialog.querySelector(".leaflet-inner").scrollTop = 0;
}

document.querySelectorAll(".product").forEach((btn) => {
  btn.addEventListener("click", () => openLeaflet(btn.dataset.product, btn));
});

dialog.querySelector(".close").addEventListener("click", () => dialog.close());

// click on the dimmed backdrop closes the leaflet
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});

dialog.addEventListener("close", () => {
  if (opener) opener.focus();
});
