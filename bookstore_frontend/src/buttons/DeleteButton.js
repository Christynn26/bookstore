import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
export default function DeleteButton({children}){
    return(
        <button className="button delete-button p-2 bg-rose-800 text-white text-sm rounded w-[50px] h-auto">
           <FontAwesomeIcon icon={faTrashCan} />
        </button>
    );
}