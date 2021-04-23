import React, {ChangeEvent, useEffect, KeyboardEvent, useState} from "react";
import {GithubAPI} from "../api";
import s from "./Search.module.css"
import {Button, Input, LinearProgress} from "@material-ui/core";
import {Users, usersType} from "../Users/Users";


export const Search = () => {

    const [requestText, setRequestText] = useState<string>("")
    const [inputText, setInputText] = useState<string>("")
    const [usersList, setUsersList] = useState<Array<usersType>>([])
    const [isRequest, setisRequest] = useState<boolean>(false)

    useEffect(() => {
        if (requestText !== "") {
            setisRequest(true)
            GithubAPI.getUsers(requestText)
                .then((res) => {
                    setUsersList(res.items)
                })
                .catch((err) => {
                    throw err
                })
                .finally(() =>
                    setisRequest(false))
        }
    }, [requestText])

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            setRequestText(inputText)
        }
    }
    const onButtonClickHandler = () => {
        setRequestText(inputText)
    }
    const onInputBlur = () => {
        setRequestText(inputText)
    }


    return <>
        <div className={s.materialInput}><Input value={inputText} onChange={onInputChange} onBlur={onInputBlur}
                                                onKeyPress={onKeyPressHandler}
                                                className={s.input}
                                                placeholder={"Find users"}/>
            <span><Button onClick={onButtonClickHandler}
                          variant="contained" size="small"
                          color="primary">Find!</Button></span>
        </div>
        {
            isRequest && <LinearProgress/>
        }
        {
            !requestText || usersList.length < 1 ?
                <h2>No users here. Whould you try to search for someone else?</h2>
                : <Users usersList={usersList}/>
        }
    </>
}

