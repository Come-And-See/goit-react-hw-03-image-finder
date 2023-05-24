import * as css from './Modal.styled'
import PropTypes from 'prop-types';

export const Modal = ({ imgUrl, closeModal }) => {


    return (
        <css.Overlay onClick={closeModal}>
            <css.Modal>
                <img src={imgUrl} alt="" />
            </css.Modal>
        </css.Overlay>
    )

}



Modal.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
};