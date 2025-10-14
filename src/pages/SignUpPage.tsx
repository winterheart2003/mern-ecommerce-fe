import {useState} from "react"
import {Link} from "react-router-dom"
import {UserPlus,Mail,Lock,User,ArrowRight,Loader} from "lucide-react";
import {motion} from "framer-motion"
import {useUserStore} from "../stores/useUserStore";
import { useLanguageStore } from "../stores/useLanguagesStore";

const SignUpPage = () =>{
    const {t} = useLanguageStore();
    const loading = false;
    const [FormData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
    });

    const {signup} = useUserStore();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) =>{
        e.preventDefault();
        signup(FormData);    
    }
    return (
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <motion.div
            className="sm:mx-auto sm:w-full sm:max-w-md"
            initial={{opacity:0,y:-20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.8}}>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-emerald-400">{t.createAccount}</h2>
            </motion.div>
            <motion.div 
            className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.8,delay:0.2}}>
                <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                {t.fullName}
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" aria-hidden='true' />
                                </div>
                                <input 
                                    id="name"
                                    type="text"
                                    required
                                    value={FormData.name}
                                    onChange = {(e) => setFormData({...FormData,name:e.target.value})}
                                    className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rouded-md shadow-sm 
                                    placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text"
                                    placeholder={t.yourName}/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                Email
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" aria-hidden='true' />
                                </div>
                                <input 
                                    id="email"
                                    type="email"
                                    required
                                    value={FormData.email}
                                    onChange = {(e) => setFormData({...FormData,email:e.target.value})}
                                    className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rouded-md shadow-sm 
                                    placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text"
                                    placeholder="example@gmail.com"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                                {t.password}
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" aria-hidden='true' />
                                </div>
                                <input 
                                    id="password"
                                    type="password"
                                    required
                                    value={FormData.password}
                                    onChange = {(e) => setFormData({...FormData,password:e.target.value})}
                                    className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rouded-md shadow-sm 
                                    placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                    placeholder="********"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                                {t.confirmPassword}
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" aria-hidden='true' />
                                </div>
                                <input 
                                    id="confirmPassword"
                                    type="password"
                                    required
                                    value={FormData.confirmPassword}
                                    onChange = {(e) => setFormData({...FormData,confirmPassword:e.target.value})}
                                    className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rouded-md shadow-sm 
                                    placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                    placeholder="********"/>
                            </div>
                        </div>
                        <button
                        type="submit"
                        className="w-full flex justify-center py-2 ox-4 border border-transparent 
                        rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600
                         hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                         focus:ring-emerald-600 transition duration-150 ease-in-out disabled:opacity-50"
                         disabled={loading}>
                            {loading ? (
                                <>
                                <Loader className="mr-2 h-5 w-5 animate-spin" aria-hidden="false"/>
                                {t.loading}
                                </>
                            ) :(
                                <>
                                <UserPlus className="mr-2 h-5 w-5" aria-hidden="true"/>
                                {t.signup} </>
                            )}
                         </button>
                    </form>

                    <p className="mt-8  text-center text-sm text-gray-400"> 
                        {t.alreadyHaveAccount}
                        <Link to='/login' className="ml-2 font-medium text-emerald-400 hover:text-emerald-300">
                        {t.loginHere} <ArrowRight className="inline h-4 w-4"/> 
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default SignUpPage