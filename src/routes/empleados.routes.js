import { Router } from 'express';
import {  obtenerEmpleados } from '../controllers/empleados.controller.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/empleado', obtenerEmpleados);

export default router;