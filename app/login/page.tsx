import Head from "next/head";
import { Montserrat } from 'next/font/google'
import { Input } from "../../components/shared/Input/Input";
const roboto = Montserrat({
    weight: "900",
    subsets: ["latin"]
})
export default function Login() {
    return (
        <div className="">
            <Input textSize="text-4xl" />
        </div>
    );
}
