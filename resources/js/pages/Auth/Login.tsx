import { useForm, usePage } from "@inertiajs/react";

export default function Login(){

    

    const { data, setData, post, processing } = useForm({
        email: '',
        password: ''
    });
    const { flash, errors } : any = usePage().props;

    const submit = (e: any) => {
        e.preventDefault();
        post('/login', { preserveState: true });
    }

    return(
        <form onSubmit={submit} className="max-w-md mx-auto mt-8 space-y-4">
            { flash?.message && <div>{flash.message}</div> }

            { errors?.email && <div>{errors.email}</div> }

            <input 
                type="email"
                value={data.email}
                onChange={e => setData('email', e.target.value)}
            />

            <input 
                type="password"
                value={data.password}
                onChange={e => setData('password', e.target.value)}
            />

            <button type="submit" disabled={processing}>Login</button>

        </form>
    );
}