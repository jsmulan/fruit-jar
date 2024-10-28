
export const Header = ({ heading }: { heading: string }) => {
    if (!heading) return null;
    return <h2 className='text-left font-bold text-xl w-full'>{heading}</h2>;
};
