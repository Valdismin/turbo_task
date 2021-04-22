import React from "react";
import s from "./Users.module.css"
import {Button, Link} from "@material-ui/core";


export type usersType = {
    avatar_url: string
    events_url: string
    followers_url: string
    following_url: string
    gists_url: string
    gravatar_id: string
    html_url: string
    id: number
    login: string
    node_id: string
    organizations_url: string
    received_events_url: string
    repos_url: string
    score: number
    site_admin: boolean
    starred_url: string
    subscriptions_url: string
    type: string
    url: string
}
type propsType = {
    usersList: Array<usersType>
}

export const Users = (props: propsType) => {

    const renderUsersItem = (user: usersType, idx: number) => {
        const {login, avatar_url, html_url,repos_url} = user
        return (
            <ul key={idx}>
                <div className={s.user}>
                    <h1>{login}</h1>
                    <img src={avatar_url} alt="" width="300px"/>
                    <form target="_blank">
                        <Button variant="contained" size="small" color="primary" type="submit"
                                formAction={html_url}>See on Github</Button>
                        <Button variant="contained" size="small" color="primary" type="submit"
                                formAction={repos_url}>See user code on Github</Button>
                    </form>
                </div>
            </ul>
        );
    }
    return <div className={s.main}>
        {props.usersList.map((user) => renderUsersItem(user, user.id))}
    </div>
}