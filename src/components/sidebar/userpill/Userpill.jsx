import { Alert, Figure } from "react-bootstrap"
import './Userpill.css'
import { Trash, PencilFill  } from "react-bootstrap-icons"
import Swal from "sweetalert2"
import { deleteUser } from "../../../services/employee.service"

function Userpill({name, image, id, refreshAction}) {
    const handleDeleteUser = () => {
        Swal.fire("Borrar Empleado", "Esta seguro de borrar al usuario?", "question").then(
            res => {
                if (res.isConfirmed) {
                    deleteUser(id).then(
                        res => {
                            Swal.fire("Empleado borrado", "El Usuario ha sido borrado", "success").then(
                                () => {
                                    refreshAction()
                                }
                            )
                        }
                    ).catch(
                        err => {
                            Swal.fire("Borrado de Usuario", "Ha ocurrido un error", "error")
                        }
                    )
                }
            }
        )
    }
    return (
        <Alert variant="secondary" className="text-left light-green p-2">
            <Figure.Image
                src={image ? image : 'vite.svg'}
                className="round mt-2"
                width="40px" />
            <strong>  {name}</strong>
            {' '}<Trash title="Delete user" className="delete-icon" onClick={handleDeleteUser}/>
            {' '} <PencilFill title="Edit user" className="pencil-icon" />
        </Alert>
    )
}

export default Userpill