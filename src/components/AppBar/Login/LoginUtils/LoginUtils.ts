import { z, ZodError, ZodIssue } from "zod";

const loginData = z.object({
  emailAddress: z.string().email(),
  password: z.string().min(5),
});

interface ILoginData {
  emailAddress: string | undefined;
  password: string | undefined;
}

export const validate = (
  loginFormData: ILoginData,
  processError: (issue: ZodIssue) => void
): boolean => {
  try {
    loginData.parse(loginFormData);
    return true;
  } catch (error) {
    if (error instanceof ZodError) {
      error.issues.forEach((issue) => {
        processError(issue);
      });
    }
    return false;
  }
};
