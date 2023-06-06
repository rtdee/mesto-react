import React from "react";

function PopupWithForm (props) {
  const [popupOpened, setPopupOpened] = React.useState('')
  React.useEffect(() => {
    props.isOpen ? setPopupOpened('popup_opened') : setPopupOpened('')
  })
  
  return (
    <>
      <div className={`popup ${props.popupType} ${popupOpened}`} tabIndex="-1">
        <div className="popup__container">
          <h2 className="popup__title">{props.popupTitle}</h2>
          <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
          <form className={`popup__form ${props.popupFormType}`} name={props.popupFormName} noValidate>
            {props.children}
            <button className="popup__save-button" type="submit">{props.popupButtonText}</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default PopupWithForm;