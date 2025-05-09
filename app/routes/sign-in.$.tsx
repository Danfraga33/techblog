// app/routes/sign-in.tsx
import { GoogleOneTap, SignIn } from "@clerk/remix";

export default function SignInPage() {
  return (
    <div className="grid w-full grow items-center px-4 sm:justify-center">
      <SignIn forceRedirectUrl="/" />
    </div>
  );
}
