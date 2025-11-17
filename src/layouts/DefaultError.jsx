import { Outlet } from "react-router-dom";

export default function DefaultError() {


    return (
        <>
            

            <main className="min-vh-100">
                <Outlet />
            </main>

            

        </>

    )
}