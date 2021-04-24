import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoadMore =() => (
        <div className="center">
          <Loader
            type="Oval"
            color="#00BFFF" 
            height={80} 
            width={80}
          />
        </div>
);

export default LoadMore;