import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../redux/ducks/user";

const Header = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const user = useSelector((state) => state.user.user);
    const {name} = user;

    useEffect(() => {
        void dispatch(getUser());
    }, [dispatch]);


    return (
        <div className="header">
            <h3>Welcome: {name}</h3>
        </div>
    );
};

export default Header;