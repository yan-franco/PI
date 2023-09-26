import pikachuLoader from '../../img/loading.gif'
import "./loader.css";

function Loader() {
    return (
        <div className="spinner">
            <img 
				src={pikachuLoader}
				alt='Pikachu loader'
                width="300"
                height="250"
			/>
            <span className="loading">Loading...</span>
        </div> 
    )
}

export default Loader;