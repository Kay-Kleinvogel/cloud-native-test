import { Routes, Route } from "react-router-dom";
import CreateNote from "./CreateNote/CreateNote";
import Dashboard from "./Dashboard/Dashboard";

function Router() {
  return (
    <div className='Router'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/create' element={<CreateNote />} />
      </Routes>
    </div>
  );
}

export default Router;
