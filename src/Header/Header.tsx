import React from "react";
import s from "./Header.module.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import {Button} from "@material-ui/core";

export const Header = () => {
    return <div className={s.main}>
        <div className={s.text}>User Finder</div>
        <form target="_blank">
            <Button variant="contained" size="small" color="primary" type="submit"
                    formAction="https://github.com/Valdismin/turbo_task">See code on Github</Button>
        </form>
    </div>
}