import { useForm, usePage } from "@inertiajs/react";

export default function Login(){

    const { data, setData, post, processing } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const { errors } : any = usePage().props;

    const submit = (e: any) => {
        e.preventDefault();
        post('/register', { preserveState: true });
    }

    return(
        <form onSubmit={submit} className="flex flex-col max-w-md mx-auto mt-8 p-4 rounded space-y-4 bg-gray-200">

            { errors?.name && <div>{errors.name}</div> }
            { errors?.email && <div>{errors.email}</div> }
            { errors?.password && <div>{errors.password}</div> }

            <input 
                id="name"
                name="name"
                type="text"
                value={data.name}
                placeholder="Name"
                onChange={e => setData('name', e.target.value)}
            />

            <input 
                id="email"
                name="email"
                type="email"
                value={data.email}
                placeholder="Email"
                onChange={e => setData('email', e.target.value)}
            />

            <input 
                id="password"
                name="password"
                type="password"
                value={data.password}
                placeholder="Password"
                onChange={e => setData('password', e.target.value)}
            />

            <input 
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                value={data.password_confirmation}
                placeholder="Confirm Password"
                onChange={e => setData('password_confirmation', e.target.value)}
            />

            <button type="submit" disabled={processing}>Register</button>

        </form>
    );
}