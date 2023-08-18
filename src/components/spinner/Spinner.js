import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";

const Spinner = () => {
    const { load } = useSelector(state => state.appReducer)

    return (
        <div className="loader-styles">
            <Loader
                type="TailSpin"
                color="#00BFFF"
                height={100}
                width={100}
                visible={load}
            />
        </div>
    )
}

export default Spinner;