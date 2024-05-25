import {BrowserRouter, Routes, Route} from "react-router-dom" 
import Tasks from "./pages/Tasks"
import Details from "./pages/Details"
import NewTask from "./pages/NewTask"
import { ROUTES } from "./constants/routes"


export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path={ROUTES.home} element={<Tasks/>} />
       <Route path={ROUTES.details} element={<Details/>} />
       <Route path={ROUTES.new_task} element={<NewTask/>}/>
       
    </Routes>
    </BrowserRouter>
  )
}