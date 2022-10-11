import React from "react";
// import HOComponents from "./components/HOComponents";
// import Lifecycle from "./components/Lifecycle";
// import UseMemoHooks from "./components/UseMemoHook";
// import UseEffectHook from "./components/UseEffectHook";
// import UseReducerHook from "./components/UseReducer";
// import Homepage from "./components/ConRan2";
// import Additional from "./components/Additional";
// import UseStatehook from "./components/UseState";
// import ConditionalRan from "./components/ConditionalRandering";
// import PassData from "./components/PropsPass";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import Routings from "./components/Routing";
// import Data from "./components/Data";
import UserRef from "./components/UseR";


class App extends React.Component {
    render() {
        return (
            <>
                <UserRef />
                {/* <HOComponents /> */}
                {/* <Additional /> */}
                {/* <Lifecycle /> */}

                {/* <UseMemoHooks /> */}
                {/* <UseReducerHook /> */}
                {/* <UseEffectHook /> */}
                {/* <UseStatehook /> */}
                {/* <Homepage /> */}
                {/* <PassData age='25'/> */}
                {/* <ConditionalRan /> */}
                {/* 
                <BrowserRouter>
                    <Link to='/routingPage'> click To go on Rendering page </Link>

                    <Routes>
                        <Route path="/routingPage" element={<Routings />}>
                            <Route path="data" element={<Data />} />
                        </Route>
                    </Routes>
                </BrowserRouter> */}





            </>
        )
    }
}
export default App