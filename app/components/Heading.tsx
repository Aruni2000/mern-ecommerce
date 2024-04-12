interface HeadingProps {
    title: string;
    center?: boolean;
}
const Heading: React.FC<HeadingProps> = ({ title, center }) => {
    return (
        <div className={center ? "text-center" : "text-start text-slate-900"}>
            <h1 className="font-bold text-2xl">{title}</h1>
        </div>
    );
}
 
export default Heading;