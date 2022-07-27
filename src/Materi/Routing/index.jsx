import Navigation from "./Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import Clients from "./Client";

const Routing = () => {
    return (
        <div className="main">

            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="service" element={<Service />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="clients" element={<Clients />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Routing;