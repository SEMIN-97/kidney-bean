import { useMutation } from '@tanstack/react-query';

import { validateEmail } from '../../api/auth.ts';

export const useValidateEmailMutation = () => {
   return useMutation({
     mutationFn: (email: string) => validateEmail(email)
  });
};
