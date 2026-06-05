const menuTriggers = document.querySelectorAll("[data-menu-trigger]");
const menuPanels = document.querySelectorAll("[data-menu-panel]");
const drawerButton = document.querySelector(".l-header__drawer-button");
const drawerClose = document.querySelector(".l-drawer__close");
const drawer = document.querySelector(".l-drawer");

function closeMenus() {
  menuPanels.forEach((panel) => panel.classList.remove("is-open"));
}

menuTriggers.forEach((trigger) => {
  const target = trigger.dataset.menuTrigger;
  const panel = document.querySelector(`[data-menu-panel="${target}"]`);

  trigger.addEventListener("mouseenter", () => {
    closeMenus();
    panel?.classList.add("is-open");
  });

  trigger.addEventListener("click", () => {
    const isOpen = panel?.classList.contains("is-open");
    closeMenus();
    if (!isOpen) panel?.classList.add("is-open");
  });
});

menuPanels.forEach((panel) => {
  panel.addEventListener("mouseleave", closeMenus);
});

document.addEventListener("click", (event) => {
  if (
    !event.target.closest("[data-menu-trigger]") &&
    !event.target.closest("[data-menu-panel]")
  ) {
    closeMenus();
  }
});

drawerButton?.addEventListener("click", () => {
  drawer?.classList.add("is-open");
  document.body.classList.add("is-drawer-open");
});

drawerClose?.addEventListener("click", () => {
  drawer?.classList.remove("is-open");
  document.body.classList.remove("is-drawer-open");
});

document.querySelectorAll(".c-accordion__button").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".c-accordion__item")?.classList.toggle("is-open");
  });
});
