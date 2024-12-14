import ButtonScroll from '../buttonScroll/ButtonScroll';
import './style.scss'; // Importing style file

// Effect component definition
const Effect = ({ children }) => {
    return (
        <>
            <div className='effect'>
                <div className="children">
                    <ButtonScroll />
                    {children} {/* Rendering children components */}
                </div>
            </div>
        </>
    );
};

export default Effect; // Exporting Effect component