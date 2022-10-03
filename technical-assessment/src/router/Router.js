import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateEvent from "../components/create-event/CreateEvent";
import Event from "../components/event/Event";
import Landing from "../components/landing/Landing";
import Error404 from "../components/error-404/Error404";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Landing />} />
        <Route path="create" element={<CreateEvent />} />
        <Route path="event" element={<Event />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
