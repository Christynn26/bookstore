import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
export default function EditButton({children}){
    return(
        <button className="button edit-button p-2 bg-yellow-900 text-white text-sm rounded mr-2 w-[50px] h-auto">
           <FontAwesomeIcon icon={faEdit} />
        </button>
    );
}