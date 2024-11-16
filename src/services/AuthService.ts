import { LoginFormData, RegisterFormData } from "@app/components/cuenta";



export class AuthService {

  static async login(payload: LoginFormData) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ ...payload })
    });

    return await response.json();
  }

  static async register(payload: RegisterFormData) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ ...payload })
    });


    return response;
  }
}