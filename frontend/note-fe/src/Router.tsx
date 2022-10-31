import { Routes, Route } from "react-router-dom";
import CreateNote from "./CreateNote/CreateNote";
import Overview from "./Dashboard/overview/Overview";

function Router() {
  return (
    <div className='Router'>
      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/create' element={<CreateNote />} />
        <Route path='/edit/:id' element={<CreateNote />} />
        <Route path='*' element={<Overview />} />
      </Routes>
    </div>
  );
}

export default Router;
