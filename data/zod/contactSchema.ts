import z from 'zod';
import validator from 'validator';

const contactSchema = z.object({
  fullname: z.string().min(1, { message: 'Fullname field required!' }),
  email: z.string().refine(validator.isEmail, 'Valid email required!'),
  subject: z.string().min(1, { message: 'Subject field required!' }),
  phone: z.string().refine(validator.isMobilePhone),
  message: z.string().min(1, { message: 'Message field required!' }),
}); 

export default contactSchema;
