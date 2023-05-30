import {Dropdown,DropdownButton} from "react-bootstrap";
import MyInfo from "../../MyInfo /MyInfo";


const DropdownElement = () => {

    return (<DropdownButton id="dropdown-basic-button"
                        title="Menu"
                        variant={'primary'}
        >
            <MyInfo/>
            <Dropdown.Item href='/about'>About</Dropdown.Item>
            <Dropdown.Item href='/'>PostsList</Dropdown.Item>
        </DropdownButton>)
}

export default DropdownElement