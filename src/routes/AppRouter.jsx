import { Routes, Route } from "react-router-dom"
import { Main, About, Skill, Project } from "../component/index"

export const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path="" element={<Main/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/skill" element={<Skill/>} />
                <Route path="/project" element={<Project/>}/>
            </Routes>
        </>
    )
}