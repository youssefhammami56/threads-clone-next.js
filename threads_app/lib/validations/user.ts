import * as z from 'zod';

const usernamePattern = /^[a-zA-Z0-9_]+$/;



export const UserValidation = z.object({
   profile_photo: z.string().nonempty().url(),
   name: z.string().nonempty({message : "Name is required",}).min(3).max(30),
   username: z.string().nonempty({message : "Username is required",}).min(3).max(30).regex(usernamePattern, {message: "Username must contain only letters, numbers, or underscores",}),
   bio: z.string().min(3).max(1000),
});