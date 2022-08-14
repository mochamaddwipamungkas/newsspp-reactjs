import Navigation from "./Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import Clients from "./Client";
import Computer from "./Service/computer";
import Mobile from "./Service/mobile";
import Details from "./Home/Details";

const Routing = () => {
    return (
        <div className="main">

            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/service" element={<Service />} >
                        <Route path={"computer"} element={<Computer />} />
                        <Route path={"mobile"} element={<Mobile />} />
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                    <Route path=":id" element={<Details />} />
                    <Route path="/clients" element={<Clients />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Routing;