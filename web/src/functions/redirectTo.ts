import { redirect } from "next/navigation";

export default function redirectTo(path: string){
    setTimeout(() => {
        redirect(path)
    }, 2000)
}
