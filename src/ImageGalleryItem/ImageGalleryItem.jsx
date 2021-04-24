import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({hits, onClickModal}) =>
hits.map(({id, webformatURL, largeImageURL, tags}) => (
    <li key = {id} className ={style.ImageGalleryItem}>
    <img 
    src={webformatURL} 
    alt={tags}
    className = {style.ImageGalleryItem_image}
    onClick ={onClickModal}
    srcSet = {largeImageURL}
    />
</li>
));

export default ImageGalleryItem;