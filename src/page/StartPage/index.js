import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthContext } from '~/components/AuthenProvider';
import { useContext } from 'react';
function Start() {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [state, setstate] = useState(5)
    useEffect(() => {
        const a = setTimeout(() => {
            console.log(1)
            setstate(prev => prev - 1);
        }, 1000)
        if (state === 0) {
            if (auth.hasOwnProperty('password') && auth.hasOwnProperty('username')) {
                const b = setTimeout(() => {
                    navigate('/dashboard');
                    clearTimeout(b);
                }, 1000);

            }
            else {
                const b = setTimeout(() => {
                    navigate('/authenticate');
                    clearTimeout(b);
                }, 1000);

            }
        }
        return () => {
            clearTimeout(a);
        }
    }, [state, navigate])
    return (
        <div>
            <h1>Xin vui lòng chờ {state} giây</h1>
        </div>
    );
}

export default Start;