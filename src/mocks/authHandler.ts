import { http, HttpResponse } from 'msw';

import { LoginRequest, ValidateEmailPathParams } from '../types/authType.ts';

const endPoint = '/api/auth';
const verifiedUser: LoginRequest  = {
  email: 'user@test.com',
  password: '1234qwer!'
};

export const authHandler = [
  http.post<ValidateEmailPathParams>(`${endPoint}/:email`, async ({ params }) => {
    const { email } = params;

    if (email === verifiedUser.email) {
      return new HttpResponse(null, { status: 200 });
    }

    return new HttpResponse(null, { status: 400 });
  })
];
