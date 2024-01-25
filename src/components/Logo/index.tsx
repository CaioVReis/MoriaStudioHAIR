



type NavProps = {
    img: string;
    alt: string;
}



const LogoMoira = ({ img='string' }: NavProps) => {

    <div>
        <img  src={img} alt="LogoMoira"  />

    </div>

};

export default LogoMoira;