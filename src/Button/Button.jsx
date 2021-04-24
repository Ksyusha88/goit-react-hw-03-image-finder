import style from './Button.module.css';

const Button = ({loadMore}) => (
    <button type="button" className = {style.Button} onClick ={loadMore}>
          Load more
        </button>
);

export default Button;