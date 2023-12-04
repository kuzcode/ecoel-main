export const sidebarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Главная",
  },
  {
    imgURL: "/assets/search.svg",
    route: "/search",
    label: "Поиск",
  },
  {
    imgURL: "/assets/heart.svg",
    route: "/activity",
    label: "Уведомления",
  },
  {
    imgURL: "/assets/create.svg",
    route: "/create-thread",
    label: "Запись",
  },
  {
    imgURL: "/assets/user.svg",
    route: "/profile",
    label: "Профиль",
  },
];

export const profileTabs = [
  { value: "threads", label: "Записи", icon: "/assets/reply.svg" },
  { value: "replies", label: "Ответы", icon: "/assets/members.svg" },
  { value: "tagged", label: "Отметки", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Записи", icon: "/assets/reply.svg" },
  { value: "members", label: "Участники", icon: "/assets/members.svg" },
  { value: "requests", label: "Запросы", icon: "/assets/request.svg" },
];
