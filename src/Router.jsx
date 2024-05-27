import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from "./pages/Tasks";
import { ROUTES } from "./constants/routes";
import { Suspense, lazy } from "react";
import { Toaster } from "sonner";
import Spinner from "./components/Spinner";

const Details = lazy(() => import("./pages/Details"));
const NewTask = lazy(() => import("./pages/NewTask"));
const HarryPotterBooks = lazy(() => import("./pages/HarryPotterBooks"));

export default function Router() {
  return (
    <BrowserRouter>
      <Toaster richColors />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path={ROUTES.home} element={<Tasks />} />
          <Route path={`${ROUTES.details}/:id`} element={<Details />} />
          <Route path={ROUTES.new_task} element={<NewTask />} />
          <Route path={"/harry-potter-books"} element={<HarryPotterBooks />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
