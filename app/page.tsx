import LoginForm from "@/app/components/LoginForm";

export default function Home() {

    return (
        <main className={'w-full h-screen flex flex-col items-center justify-center px-10 lg:px-10'}>
            <LoginForm />
            <hr className={'my-2 w-34 opacity-10'} />
            <p className={'opacity-20 text-sm'}>secured by <span className={'font-medium'}>EMR-SOLUTION</span></p>
        </main>
    );
}
