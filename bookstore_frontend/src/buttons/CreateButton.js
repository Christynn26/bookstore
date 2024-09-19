import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function CreateButton() {
    return (
        <button className="button delete-button p-2 bg-blue-600 text-white text-sm rounded w-[50px] h-auto">
            <FontAwesomeIcon icon={faPlus} />
        </button>
    );
}