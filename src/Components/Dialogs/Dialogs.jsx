import React, {useState} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageInputReduxForm from "./DialogsForm";
import UserDialog from "./UserDialog";
import 'antd/dist/antd.css';
import {Button} from 'antd';
import TestFriendBar from "./FriendBarForDialogs/TestFriendBar";


const Dialogs = (props) => {
    let [isShowDialogsMenu, setIsShowDialogsMenu] = useState(true)
    let DialogsElements = null
    let UserInfo = null
    if (props.DialogsData) {
        if (props.UserId) {
            UserInfo = props.DialogsData.filter(d => d.id == props.UserId)
        }
        DialogsElements = props.DialogsData.map(dialog => <DialogItem
            UserId={props.UserId} key={dialog.id}
            photo={dialog.photos.large} name={dialog.userName}
            id={dialog.id}/>);
    }
    const addMessage = (dataForm) => {
        props.SendMessage(props.UserId, dataForm.messageInput)
    }


    return (
        <div className={isShowDialogsMenu? s.Dialogs: s.HiddenDialogs}>
            {isShowDialogsMenu? <div className={s.DialogsItem}>
                <Button onClick={() => {setIsShowDialogsMenu(false)}}> Hide Dialogs</Button>
                {DialogsElements}
            </div>: <Button className={s.HideButton} onClick={() => {setIsShowDialogsMenu(true)}}> Show Dialogs </Button>}

            <div className={s.Messages}>
                <div><UserDialog UserInfo={UserInfo && UserInfo[0]} DeleteMessage={props.DeleteMessage}
                                 UserId={props.UserId}
                                 CurrentUserId={props.CurrentUserId} MessagesData={props.MessagesData}/></div>
            </div>
            <div className={s.FriendBar}>
                <TestFriendBar AddNewDialog = {props.AddNewDialog} FriendsArray = {props.Friends}/>
            </div>
            <div className={s.NewMessage}>
                <MessageInputReduxForm onSubmit={addMessage}/>
            </div>
        </div>
    )
}


export default Dialogs