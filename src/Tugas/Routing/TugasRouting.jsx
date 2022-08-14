import Navigation from "./Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "../../Materi/Form";
import Home from "../../Materi/Routing/Home";
import LatihanHook from "../../Materi/Hook/indexHook";
import Komponen from "../../Materi/Komponen";
import Lifecycle from "../../Materi/Lifecycle";
import Rendering from "../../Materi/Rendering";
import Reusable from "../../Materi/Reusable";
import Styling from "../../Materi/Styling";
import Details from "../../Materi/Routing/Home/Details";
import TugasHook from "../Hook/IndexTugasHook";

const TugasRouting = () => {
    return (
        <div className="main">

            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/hook" element={<LatihanHook />} />
                    <Route path="/component" element={<Komponen />} />
                    <Route path="/lifecycle" element={<Lifecycle />} />
                    <Route path="/rendering" element={<Rendering />} />
                    <Route path="/reusable" element={<Reusable />} />
                    <Route path="/styling" element={<Styling />} />
                    <Route path="/newapps" element={<TugasHook />} />
                    {/* <Route path="/service" element={<Service />} >
                        <Route path={"computer"} element={<Computer />} />
                        <Route path={"mobile"} element={<Mobile />} />
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                    <Route path=":id" element={<Details />} />
                    <Route path="/clients" element={<Clients />} /> */}
                    <Route path=":id" element={<Details />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default TugasRouting;