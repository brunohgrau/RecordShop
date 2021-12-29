import { ReactComponent as Logo } from "../../assets/vinyl.svg";
import { useNavigate } from "react-router-dom";

const LogoComponent = () => {
  const navigate = useNavigate();
  const logoHandler = () => {
    navigate({ pathname: `/` });
  };

  return (
    <>
      <a
        class="flex  items-center text-sm font-bold leading-relaxed inline-block
            mr-4 py-2  whitespace-nowrap uppercase text-black cursor-pointer "
        onClick={logoHandler}
      >
        <Logo className="h-6 w-6" />
        <span className=" font-bold ml-2 text-black "> Vinyl Shop</span>
      </a>
    </>
  );
};

export default LogoComponent;
