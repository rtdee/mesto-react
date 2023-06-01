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
            <input className={`popup__txt-input ${props.popupFirstInputClass}`} type={props.popupFirstInputType} id={props.popupFirstInputId} name={props.popupFirstInputName} placeholder={props.popupFirstInputPlaceholder} required minLength={props.popupFirstInputMinLength} maxLength={props.popupFirstInputMaxLength}/>
            <span className={`popup__error ${props.popupFirstInputError}`}></span>
            <input className={`popup__txt-input ${props.popupSecondInputClass}`} type={props.popupSecondInputType} id={props.popupSecondInputId} name={props.popupSecondInputName} placeholder={props.popupSecondInputPlaceholder} required minLength={props.popupSecondInputMinLength} maxLength={props.popupSecondInputMaxLength}/>
            <span className={`popup__error ${props.popupSecondInputError}`}></span>
            <button className="popup__save-button" type="submit">{props.popupButtonText}</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default PopupWithForm;