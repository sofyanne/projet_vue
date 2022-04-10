import VueRouter from "vue-router";
import TodoPage from "../components/TodoPage"
import TodoEditPage from "../components/TodoEditPage"
import PageNotFound from "../components/PageNotFound"
import HomePage from "../components/HomePage"

const routes = [
  {path: "/", component: HomePage},
  {path: "/todos", component: TodoPage},
  {path: "/todos/:id", component: TodoEditPage},
  {path: "*", component: PageNotFound},
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
