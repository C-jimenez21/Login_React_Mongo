import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string({
    required_error: {status: 406, message: 'Username is required and must be a string'},
  }),
  email: z
    .string({
      required_error: {status: 406, message: 'Email is required and must be a string'},
    })
    .email({
      message: {status: 406, message: 'Email is not valid'},
    }),
  password: z
    .string({
      required_error: {status: 406, message: 'Password is required and must be a string'},
    })
    .min(6, {
      message: {status: 406, message: 'Password must be at least 6 characters'},
    }),
  rol: z.number({
        required_error: {status: 406, message: 'rol is required and must be an Int'},
      }),
});

export const loginSchema = z.object({
  email: z.string({
    required_error: {status: 406, message: 'Email is required and must be a string'},
  })
  .email({
    message: {status: 406, message: 'Email is not valid'},
  }),
  password: z.string({
    required_error: {status: 406, message: 'Password is required and must be a string'},
  })
  .min(6, {
    message: {status: 406, message: 'Password must be at least 6 characters'},
  }),
});