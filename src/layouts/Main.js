import React from "react";
import { BackgroundColorContext } from "../contexts/BackgroundColorContext";
import Sidebar from "../components/Sidebar/Sidebar";
import routes from '../routes';
import FixedPlugin from "../components/FixedPlugin/FixedPlugin";
import MemoPlugin from "../components/MemoPlugin/MemoPlugin";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
function Main(props) {

    const toggleSideBar = () => {
        console.log("toggle 클릭!")
    }

    const getRoute = (routes) => {
        return (
            routes.map((prop, key) => {
                return(
                <Route
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={key}
                />);
            }));
    }

    return (
        <BackgroundColorContext.Consumer>
            {({ color, changeColor }) => (
                <React.Fragment>
                    <div className="wrapper">
                        <Sidebar
                            routes={routes}
                            toggleSideBar={toggleSideBar} />
                        <div className="main-panel">
                            <Switch>
                                {getRoute(routes)}
                                <Redirect to="/main/stockinfo"/>
                            </Switch>
                        </div>
                    </div>
                    <FixedPlugin bgColor={color} handleBgClick={changeColor} />
                    <MemoPlugin/>
                </React.Fragment>
            )}
        </BackgroundColorContext.Consumer>
    );

}

export default Main