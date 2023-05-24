import * as css from './ImageGalleryItem.styled'
import { Modal } from '../Modal/Modal'
import PropTypes from 'prop-types';


export const ImageGalleryItem = ({ data, openModal, isModalOpen, largeImageURL , closeModal}) => {
    return (
        <>
            {data.map((item) => (
                <css.ImageGalleryItem key={item.id}>
                    <css.Image src={item.webformatURL} alt={item.tags} data-img={item.largeImageURL} onClick={openModal} />
                </css.ImageGalleryItem>
            ))}

            {isModalOpen && <Modal imgUrl={largeImageURL} closeModal={closeModal} />}
        </>
    )
}



ImageGalleryItem.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        })
    ).isRequired,
    openModal: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
};