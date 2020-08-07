import React, {lazy, Suspense} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "../ui/composite/pages/errorpages/404";
import {PropagateLoader} from "react-spinners";


// noinspection JSCheckFunctionSignatures
const HomePage = lazy(() => import("../ui/composite/pages/home"));
// noinspection JSCheckFunctionSignatures
const SinglePage = lazy(() => import("../ui/composite/pages/singlepage"));

function AppRoutes() {
    
    return (
        <>
            <Suspense fallback={
                <div className="page-loader">
                    <PropagateLoader/>
                </div>
            }>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/gif_details" component={SinglePage}/>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </>
    );
}

export default AppRoutes;
