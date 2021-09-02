import Image from 'next/image'
import { signIn } from 'next-auth/client'
function Login() {
    return (
        <div className="grid place-items-center" >
            <Image
                src="https://links.papareact.com/t4i"
                height={400}
                width={400}
                objectFit = "contain"
            />
            <h1 onClick={signIn} className="p-2 bg-blue-500 cursor-pointer rounded-full text-center text-white " >Login with Facebook</h1>
        </div>
    )
}

export default Login
