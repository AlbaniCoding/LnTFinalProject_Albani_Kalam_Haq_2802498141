import EditPanel from "../components/EditPanel";
import Navbar from "../components/Navbar";
import CreateButton from "../components/CreateButton";

function AdminPanel() {
    return (
        <>  
            <CreateButton/>
            <Navbar/>
            <EditPanel/>
        </>
    )   
}

export default AdminPanel