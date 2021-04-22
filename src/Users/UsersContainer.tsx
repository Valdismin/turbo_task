import React, {useEffect, useState} from "react";
import s from "./Users.module.css"
import {Button} from "@material-ui/core";
import {Users, usersType} from "./Users";

type UsersContainerPropsType = {
    usersList: Array<usersType>
}

export const UsersContainer = (props: UsersContainerPropsType) => {

    const [ids, SetIds] = useState<string>("")


    return <div className={s.main}>
        <Users usersList={props.usersList}/>
    </div>
}