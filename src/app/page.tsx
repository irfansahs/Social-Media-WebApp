import { SessionProvider } from "next-auth/react";
import Form from "./components/Form";

export default function Home(props: any) {
  return (
    <div className="flex justify-center items-center">
        <Form />
    </div>
  );
}
