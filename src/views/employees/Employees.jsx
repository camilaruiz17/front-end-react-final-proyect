import { Card, Container, Form, Button } from "react-bootstrap";
import "../employees/Employees.css";

const  Employees= () => {
   return (
      <div className="profileWrapper">
         <div>
            <p className="regisTitle">Registro de Personal</p>
         </div>
      <Container className="p-5">
         <Card id="regisCardStyle" className="text-start">
            <Card.Title id="regisTittle" className="text-center">
            </Card.Title>
            <Card.Body>
            <Form id="regisForm">
               <Form.Group className="mb-3" controlId="employeeName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Nombre del Empleado" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="employeeSurName">
                  <Form.Label>Apellidos</Form.Label>
                  <Form.Control type="text" placeholder="Apellido del Empleado" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="employeeEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Correo del empleado" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label>Confirmar Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Confirmar Password" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="employeePhone">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control type="text" placeholder="Telefono del empleado" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="employeeDni">
                  <Form.Label>DNI/NIE</Form.Label>
                  <Form.Control type="text" placeholder="DNI o NIE del empleado" />
               </Form.Group>
               <Form.Group>
               <Form.Label>Sector</Form.Label>
               <Form.Select className="mb-3" controlId="employeeSector">
               <option value="Jardinería">Jardinería</option>
               <option value="Limpieza Málaga">Limpieza Málaga</option>
               <option value="Limpieza Cádiz">Limpieza Cádiz</option>
               <option value="Limpieza Cádiz">Hilo Doble</option>
                  </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="employeePhoto">
                  <Form.Label>Foto</Form.Label>
                  <Form.Control type="text" placeholder="Imagen del Empleado" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="employeeStarting">
                  <Form.Label>Inicio del Contrato</Form.Label>
                  <input
                     type="date"
                     name="party"
                     min="2010-04-01"
                     max="2024-04-20"
                     required />
               <span class="validity"></span>
               </Form.Group>
               <Form.Group className="mb-3" controlId="employeeFinished">
                  <Form.Label>Fin del Contrato</Form.Label>
                  <input
                     type="date"
                     name="party"
                     min="2010-04-01"
                     max="2024-04-20"
                     required />
               <span class="validity"></span>
               </Form.Group>
               <Form.Group>
               <Form.Label>Tipo de Contrato</Form.Label>
               <Form.Select className="mb-3" controlId="employeeType">
               <option value="true">Permanente</option>
               <option value="false">Temporal</option>
                  </Form.Select>
               </Form.Group>
               <Form.Group>
                  <Form.Label>Estatus Actual</Form.Label>
                  <Form.Select className="mb-3" controlId="employeeStatus">
                  <option value="true">Activo</option>
                  <option value="false">Baja</option>
                  </Form.Select>
                  </Form.Group>
               <div id="btnContainer">
                  <Button id="createBtn" variant="primary" type="submit">
                     Crear Usuario
                  </Button>
               </div>
            </Form>
            </Card.Body>
         </Card>
      </Container>
   </div>
   );
};

export default Employees;