import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

type ModalType = {
  component: React.ComponentType;
  state: Boolean;
  setState: Function;
};

const Modal = ({ component: Component, state, setState }: ModalType) => {
  useEffect(() => {
    if (state) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = 'scroll';
    }
  }, [state]);

  if (document.querySelector('body')) {
    return createPortal(
      <div className={`modal-box ${state ? 'show' : 'hide'}`}>
        <div onClick={() => setState(false)}></div>

        <div>
          <div>
            <Component />
          </div>
        </div>
      </div>,
      document.querySelector('body') as HTMLElement
    );
  }
};

export default Modal;
