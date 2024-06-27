import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const LoginButton = () => {
    return (
        <Button className=''>
            <Lock /> <span className='ml-3'>Login</span>
        </Button>
    );
};

export default LoginButton;
