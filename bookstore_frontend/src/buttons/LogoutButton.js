import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
export default function LogoutButton(){
    return(
        <button className="button edit-button p-2 text-white text-sm rounded mr-2 w-[50px] h-auto">
           <FontAwesomeIcon icon={faPowerOff} />
        </button>
    );
}