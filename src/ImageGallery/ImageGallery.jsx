// import PropTypes from "prop-types";
import ImageGalleryItem from '../ImageGalleryItem';
import style from './ImageGallery.module.css';


const ImageGallery = ({hits, onClickModal}) => (
    <ul className={style.ImageGallery}>
        <ImageGalleryItem hits ={hits} onClickModal = {onClickModal}/>
    </ul>
);

// // ImageGallery.propTypes = {
// //     hits: PropTypes.object.isRequired,
//   };

export default ImageGallery;