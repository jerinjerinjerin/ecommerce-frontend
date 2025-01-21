import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex items-center justify-center flx-col gap-5 w-screen h-screen bg-black text-red-500">
      <h1 className="text-2xl font-bold inline-block">This Page Not Found</h1>
      <Button variant="outlined" color="error" size="medium">
        <Link className="text-white font-semibold text-lg" to={"/"}>
          Go to home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
