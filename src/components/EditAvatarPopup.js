import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  const avatarInputRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
  }

  return (
    <PopupWithForm // avatar edit
      {...props}
      onSubmit={handleSubmit}
      popupType={"update-avatar-popup"} 
      popupTitle={"Обновить аватар"} 
      popupButtonText={"Сохранить"}
      popupFormType={"update-avatar-popup__form"}
      popupFormName={"formplace"}
      children={
        <>
          <input
          className="popup__txt-input popup__txt-input_type_avatar"
          type="url" id="avatar-url-input"
          name="avatar"
          placeholder="Ссылка на картинку"
          required
          ref={avatarInputRef}
          />
          <span className="popup__error avatar-url-input-error"></span>
        </>
      }
    />
  )
}