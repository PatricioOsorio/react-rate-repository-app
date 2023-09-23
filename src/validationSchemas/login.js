import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('¡El Email tiene que ser válido!')
    .required('El Email es requerido'),
  password: yup
    .string()
    .min(5, '¡Demasiado corto!')
    .max(100, '¡Demasiado largo!')
    .required('La contraseña es requerida'),
});
