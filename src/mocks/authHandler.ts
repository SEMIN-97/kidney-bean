import { http, HttpResponse } from 'msw';

import { LoginRequest, User, ValidateEmailPathParams } from '../types/authType.ts';

const endPoint = '/api/auth';
const verifiedUser: LoginRequest  = {
  email: 'user@test.com',
  password: '1234qwer!'
};

export const authHandler = [
  http.post<ValidateEmailPathParams>(`${endPoint}/:email`, async ({ params }) => {
    const { email } = params;

    if (email === verifiedUser.email) {
      return HttpResponse.json(null, { status: 200 });
    }

    return HttpResponse.json(null, { status: 400 });
  }),
  http.post<never, LoginRequest>(`${endPoint}/login`, async ({ request }) => {
    const { email, password } = await request.json();

    if (email === verifiedUser.email && password === verifiedUser.password) {
      return HttpResponse.json(null, { status: 200 });
    }

    return HttpResponse.json(null, { status: 401 });
  }),
  http.post<never, User, User>(`${endPoint}/user`, async ({ request }) => {
    const { email, nickname } = await request.json();

    if (email === verifiedUser.email) {
      return HttpResponse.json(null, { status: 409 });
    }

    return HttpResponse.json({ email, nickname }, { status: 201 });
  })
];
